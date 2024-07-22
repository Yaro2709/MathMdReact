import type {Config} from 'jest';

const config: Config = {
    clearMocks: true,
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
    testMatch: [
        // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    rootDir: '../../', //т.к. конфигурация аходится не в корне проекта
    preset: 'ts-jest',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
};

export default config;
