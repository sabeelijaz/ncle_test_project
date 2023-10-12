import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  testMatch: [
    "**/?(*.)+(spec|test).[jt]s?(x)"
  ],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest"
  },
  moduleFileExtensions: ["js", "ts", "json", "node"]
};

export default config;