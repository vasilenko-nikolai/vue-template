import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ["src/**/*.{js,mjs,cjs,ts,vue}"],
    },
    {
        languageOptions: {globals: globals.browser}
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs["flat/essential"],
    {
        rules: {
            'semi': ["error", "always"],
            'array-callback-return': ['error', {checkForEach: true}],
            'no-await-in-loop': 'error',
            'no-constructor-return': 'error',
            'no-duplicate-imports': 'error',
            'no-inner-declarations': 'error',
            'no-promise-executor-return': 'error',
            'no-self-compare': 'error',
            // Если нужно указать строку с ${} знаком, не должно мешать
            'no-template-curly-in-string': 'warn',
            'no-unmodified-loop-condition': 'error',
            'no-unreachable-loop': 'error',
            'no-use-before-define': 'error',
            'no-useless-assignment': 'error',
            'require-atomic-updates': 'error',

            'camelcase': 'error',
            'eqeqeq': ['error', 'always'],
            // Меня устраивают параметры по умолчанию, но {max: 50, skipBlankLines: false, skipComments: false, IIFEs: false,}
            'max-lines-per-function': ['error', 40],
            // Если параметров больше чем два, наверное лучше использовать объект???
            'max-params': ['error', 2],
            'no-console': ['error', {allow: ['warn', 'error']}],
            'no-else-return': 'error',
            'no-empty': 'error',
            'no-empty-function': 'error',
            'no-extra-boolean-cast': 'error',
            'no-loop-func': 'error',
            'no-magic-numbers': 'error',
            'no-nested-ternary': 'error',
            'no-sequences': 'error',
            'no-throw-literal': 'error',
            'no-undef-init': 'error',
            'no-undefined': 'error',
            'no-var': 'error',
            'prefer-const': 'error',

        }
    },
    {
        name: 'vue-additional',
        files: ["**/*.vue"],
        languageOptions: {
            parserOptions:
                {
                    parser: tseslint.parser
                }
        }
    },
    {
        ignores: ['**/*.config.*']
    }
];
