import { format } from 'util';

export interface Logger {
  log(message: string): void;
  warn(message: string): void;
  error(message: string): void;
}

function formatMessage(message: string): string | Buffer {
  if (typeof message !== 'string' && !(message instanceof Buffer)) {
    return format('%j', message);
  }

  return message;
}

class ProcessLogger implements Logger {
  log(message: string): void {
    process.stdout.write(formatMessage(message));
    process.stdout.write('\n');
  }

  warn(message: string): void {
    this.log(message);
  }

  error(message: string): void {
    process.stderr.write(formatMessage(message));
    process.stdout.write('\n');
  }
}

export const logger: Logger = new ProcessLogger();
