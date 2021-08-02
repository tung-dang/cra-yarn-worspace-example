import React, { useEffect } from 'react';
import { log } from '@namespace/common';

export default function AwesomeComponent() {
  useEffect(() => {
    log('This message is from "@namespace/awesome-component"');
  }, []);

  return (
    <div>
      <h1>Awesome component</h1>
      <p>{'This component is from "@namespace/awesome-component".'}</p>
      <p>{'This component also use "log" function from "@namespace/common".'}</p>
    </div>
  );
}
