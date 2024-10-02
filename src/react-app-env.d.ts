/// <reference types="react-scripts" />
// src/env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_JWT_SECRET: string;
    // Add other environment variables here if needed
  }
}
