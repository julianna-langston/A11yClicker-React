/** @type {import('jest').Config} */
module.exports = {
    moduleFileExtensions: ["js", "ts", "tsx"],
    globals: {
        "ts-jest": {
            isolatedModules: true
        }
    },
    testMatch: ["**/test/**/*.test.tsx"],
    setupFiles: ["<rootDir>/test/_setup.ts"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testEnvironment: "jsdom",
    collectCoverageFrom: [
        "src/*.{ts,tsx}"
    ],
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "babel"
};
