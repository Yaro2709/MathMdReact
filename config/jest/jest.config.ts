import type {Config} from 'jest';
import path from 'path';

const config: Config = {
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [  //игнорируем node_modules
        '\\\\node_modules\\\\',
    ],
    moduleFileExtensions: [  //расширения файлов для модулей
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    moduleDirectories: [  //директории модулей
        'node_modules',
    ],
    modulePaths: [
        '<rootDir>src',
    ],
    testMatch: [
        // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    rootDir: '../../', //т.к. конфигурация аходится не в корне проекта
    preset: 'ts-jest',
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "identity-obj-proxy",
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
};

export default config;
