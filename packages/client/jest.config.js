import dotenv from 'dotenv'
dotenv.config()

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['./src'],
  testMatch: ['<rootDir>/**/*.test.{ts,tsx}'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx|html|svg)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html', 'svg'],
  coverageReporters: ['html'],
  globals: {
    __SERVER_PORT__: process.env.SERVER_PORT,
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  moduleNameMapper: {
    '^api(.*)$': '<rootDir>/src/api$1',
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '^layouts(.*)$': '<rootDir>/src/layouts$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^static(.*)$': '<rootDir>/src/static$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^tests(.*)$': '<rootDir>/src/tests$1',
    '^hoks(.*)$': '<rootDir>/src/hoks$1',
    '^hooks(.*)$': '<rootDir>/src/hooks$1',
    '^store(.*)$': '<rootDir>/src/store$1',
    '^store_auth(.*)$': '<rootDir>/src/store/slices/auth$1',
  },
}
