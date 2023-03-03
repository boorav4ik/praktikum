import dotenv from 'dotenv'
dotenv.config()

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  transform: {
    '^.+\\.(ts|js|html|svg)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html', 'svg'],
  // coverageReporters: ['html'],
  globals: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
}
