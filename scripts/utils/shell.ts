import { exec } from 'child_process';

import { logger } from './logger';

// some command like building storybook shows a lot of logs
const MAX_BUFFER = 1024 * (5 * 1024); // 5M

interface Options {
  ignoreStdout?: boolean;
}

export async function runShellScript(command: string, options: Options = {}): Promise<string> {
  const { ignoreStdout } = options;

  return new Promise<string>((resolve, reject): void => {
    logger.log('Executing command: ');
    logger.log(command);
    logger.log('\n');

    const s = exec(command, { maxBuffer: MAX_BUFFER }, (error, stdout): void => {
      if (error) {
        reject(error);
        return;
      }

      resolve(stdout);
    });

    if (ignoreStdout) {
      logger.log('Ignore stdout for command: ' + command);
    } else {
      s.stdout.on('data', logger.log);
    }

    s.stderr.on('data', logger.error);
  });
}

export function exitWithError(...errors): void {
  errors.forEach((error): void => {
    logger.error(error);
  });
  process.exit(1);
}

export function runAsyncTask(task: () => Promise<string | number>): void {
  task().catch((e) => exitWithError(e));
}
