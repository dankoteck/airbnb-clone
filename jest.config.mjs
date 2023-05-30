import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js", "jest-canvas-mock"],
  moduleNameMapper: {
    "^~/components/(.*)$": "<rootDir>/components/$1",
    "^~/features/(.*)$": "<rootDir>/features/$1",
    "^~/app/(.*)$": "<rootDir>/app/$1",
    "^~/hooks/(.*)$": "<rootDir>/hooks/$1",
    "^~/utils/(.*)$": "<rootDir>/utils/$1",
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
