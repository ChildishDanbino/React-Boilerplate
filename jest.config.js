module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
	snapshotSerializers: ["enzyme-to-json/serializer"],
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"]
};
