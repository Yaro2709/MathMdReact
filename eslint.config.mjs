import eslintReact from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import eslinti18next from "eslint-plugin-i18next";
import tseslint from "typescript-eslint";
import pluginJs from "@eslint/js";

export default [
    { //env
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.es2024,
                ...globals.jest
            }
        }
    },
    // Необходимы ли плагин airbnb?
    // Эти плагины часто дублируют правила:
    //...tseslint.configs.recommended,
    { //parser
        languageOptions: {
            parser: tsParser
        }
    },
    { //parserOptions
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                ecmaVersion: 'latest',
                sourceType: 'module'
            }
        }
    },
    { //plugins
        plugins: {
            react: eslintReact,
            'typescript-eslint': typescriptEslint,
            i18next: eslinti18next,
        }
    },
    { //rules
        rules: {
            //eslintReact.configs.recommended.rules
            'react/display-name': 2,
            'react/jsx-key': 2,
            'react/jsx-no-comment-textnodes': 2,
            'react/jsx-no-duplicate-props': 2,
            'react/jsx-no-target-blank': 2,
            'react/jsx-no-undef': 2,
            'react/jsx-uses-react': 2,
            'react/jsx-uses-vars': 2,
            'react/no-children-prop': 2,
            'react/no-danger-with-children': 2,
            'react/no-deprecated': 2,
            'react/no-direct-mutation-state': 2,
            'react/no-find-dom-node': 2,
            'react/no-is-mounted': 2,
            'react/no-render-return-value': 2,
            'react/no-string-refs': 2,
            'react/no-unescaped-entities': 2,
            'react/no-unknown-property': 2,
            'react/no-unsafe': 0,
            'react/prop-types': 2,
            'react/require-render-return': 2,
            //Настроенные правила
            'react/jsx-indent': [2, 4], // отступы в jsx
            'react/jsx-indent-props': [2, 4], // правило для пропсов с отступами
            indent: [2, 4], // отступы для других файлов
            'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }], // расширения в которых jsx разрешен
            'import/no-unresolved': 'off', // отлкючаем правила на асболютные пути, тк мы используем относитлеьные
            'import/prefer-default-export': 'off', // отключаем дефолтный экспорт
            'no-unused-vars': 'warn', // переменная нигде не используется
            'react/require-default-props': 'off', // отключаем если не задано дефолтное значение
            'react/react-in-jsx-scope': 'off', // при использование react 17 версии не надо импортировать react
            'react/jsx-props-no-spreading': 'warn', // использование спред для пропсов, но для ui комопнентов это нормально
            'react/function-component-definition': 'off', // использование стрелочных функций для комопнентов
            'no-shadow': 'off',
            'import/extensions': 'off', // в импортах не надо указывать расширение, тк мы так настроили вебпак
            'import/no-extraneous-dependencies': 'off', // отключим запрет на импорт дев зависимостей
            'no-underscore-dangle': 'off', // разршение на нижние подчеркивание
            'max-len': ['error', { ignoreComments: true, code: 130 }], // длинные комментарии не дебажим
            //eslinti18next.configs.recommended.rules
            'i18next/no-literal-string': ['error', { markupOnly: true }], // правило, которое ругается если нет перевода при markupOnly - ругается только на отстутсвие переводов в jsx
        }
    },
    {
        languageOptions: {
            globals: {
                __IS_DEV__: true,
            }
        }
    },
    {
        files: ['**/*.{ts,tsx}'], //какие файлы попадают под линтер
    }
];
