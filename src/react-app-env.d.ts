/// <reference types="react-scripts" />

declare namespace NodeJS {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface ProcessEnv {
    REACT_APP_ENV: 'test' | 'local' | 'staging' | 'production';
  }
}
