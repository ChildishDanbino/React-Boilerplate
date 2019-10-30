module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
	modulePathIgnorePatterns: [
		"<rootDir>/__tests__/utils",
	],
	moduleDirectories: [
		'node_modules',
		"<rootDir>/__tests__/utils",
		"<rootDir>/src"
	],
}
