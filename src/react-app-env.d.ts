/// <reference types="react-scripts" />
// src/env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
    }
  }
  