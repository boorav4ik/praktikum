import dotenv from 'dotenv'
dotenv.config()

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['./src'],
  testMatch: ['<rootDir>/**/*.test.{ts,tsx}'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx|html|svg|mp3)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html', 'svg', 'mp3'],
  coverageReporters: ['html'],
  globals: {
    __SERVER_PORT__: process.env.SERVER_PORT,
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      stringifyContentPathRegex: '\\.(html|svg|mp3)$',
    },
  },
  modulePaths: ['src'],
}
