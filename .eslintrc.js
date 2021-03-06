/* becode/bookshelf (Hamilton)
 *
 * /.eslintrc.js - ESLint configuration
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 */

"use strict";

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
    env: {
        node: true,
        es6: true,
    },
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            arrowFunctions: true,
            blockBindings: true,
            classes: true,
            defaultParameters: true,
            legacyDecorators: true,
            destructuring: true,
            forOf: true,
            generators: true,
            modules: true,
            objectLiteralComputedProperties: true,
            objectLiteralDuplicateProperties: true,
            objectLiteralShorthandMethods: true,
            objectLiteralShorthandProperties: true,
            regexUFlag: true,
            regexYFlag: true,
            restParams: true,
            spread: true,
            superInFunctions: true,
            templateStrings: true,
            unicodeCodePointEscapes: true,
            globalReturn: true,
            jsx: true,
        },
    },
    plugins: ["react", "prettier"],
    settings: {
        react: {
            version: "16.4",
        },
    },
    rules: {
        "prettier/prettier": [
            ERROR,
            {
                singleQuote: false,
                tabWidth: 4,
                trailingComma: "all",
                bracketSpacing: false,
                jsxBracketSameLine: true,
            },
        ],

        "accessor-pairs": ERROR,
        "block-scoped-var": ERROR,
        "consistent-this": [ERROR, "self"],
        "constructor-super": ERROR,
        curly: ERROR,
        "dot-notation": ERROR,
        eqeqeq: [ERROR, "smart"],
        "func-style": [ERROR, "expression"],
        "global-require": ERROR,
        "handle-callback-err": WARNING,
        "new-cap": ERROR,
        "newline-after-var": [ERROR, "always"],

        "no-alert": WARNING,
        "no-array-constructor": ERROR,
        "no-bitwise": ERROR,
        "no-caller": ERROR,
        "no-catch-shadow": ERROR,
        "no-class-assign": ERROR,
        "no-confusing-arrow": WARNING,
        "no-const-assign": ERROR,
        "no-constant-condition": ERROR,
        "no-continue": ERROR,
        "no-control-regex": ERROR,
        "no-debugger": WARNING,
        "no-delete-var": ERROR,
        "no-div-regex": WARNING,
        "no-dupe-class-members": ERROR,
        "no-dupe-keys": ERROR,
        "no-duplicate-case": ERROR,
        "no-else-return": ERROR,
        "no-empty": ERROR,
        "no-empty-character-class": ERROR,
        "no-eval": ERROR,
        "no-extend-native": ERROR,
        "no-extra-bind": ERROR,
        "no-extra-boolean-cast": ERROR,
        "no-fallthrough": ERROR,
        "no-func-assign": ERROR,
        "no-implied-eval": ERROR,
        "no-inner-declarations": ERROR,
        "no-invalid-regexp": ERROR,
        "no-irregular-whitespace": ERROR,
        "no-iterator": ERROR,
        "no-labels": ERROR,
        "no-lone-blocks": ERROR,
        "no-lonely-if": ERROR,
        "no-loop-func": ERROR,
        "no-multi-str": ERROR,
        "no-native-reassign": ERROR,
        "no-negated-in-lhs": ERROR,
        "no-nested-ternary": ERROR,
        "no-new": ERROR,
        "no-new-func": ERROR,
        "no-new-object": ERROR,
        "no-new-require": ERROR,
        "no-new-wrappers": ERROR,
        "no-octal": ERROR,
        "no-octal-escape": ERROR,
        "no-param-reassign": ERROR,
        "no-proto": ERROR,
        "no-redeclare": ERROR,
        "no-return-assign": ERROR,
        "no-self-compare": ERROR,
        "no-shadow": ERROR,
        "no-shadow-restricted-names": ERROR,
        "no-this-before-super": ERROR,
        "no-throw-literal": ERROR,
        "no-undef-init": ERROR,
        "no-unneeded-ternary": ERROR,
        "no-unreachable": ERROR,
        "no-unused-expressions": [
            ERROR,
            {allowShortCircuit: true, allowTernary: true},
        ],
        "no-unused-vars": ERROR,
        "no-use-before-define": ERROR,
        "no-useless-call": ERROR,
        "no-useless-concat": ERROR,
        "no-var": ERROR,
        "no-void": ERROR,
        "no-warning-comments": OFF,
        "no-with": ERROR,

        "one-var": [ERROR, {var: "always", let: "always", const: "never"}],
        "prefer-arrow-callback": WARNING,
        "prefer-spread": WARNING,
        "prefer-template": WARNING,
        radix: [ERROR, "as-needed"],

        "react/jsx-key": WARNING,
        "react/jsx-no-comment-textnodes": ERROR,
        "react/jsx-no-duplicate-props": ERROR,
        "react/jsx-no-literals": ERROR,
        "react/jsx-no-target-blank": ERROR,
        "react/jsx-no-undef": ERROR,
        "react/jsx-pascal-case": ERROR,
        "react/jsx-uses-react": ERROR,
        "react/jsx-uses-vars": ERROR,
        "react/no-array-index-key": ERROR,
        "react/no-children-prop": ERROR,
        "react/no-danger-with-children": ERROR,
        // "react/no-deprecated": WARNING,
        "react/no-did-mount-set-state": ERROR,
        // "react/no-did-update-set-state": ERROR,
        "react/no-direct-mutation-state": ERROR,
        "react/no-find-dom-node": WARNING,
        "react/no-is-mounted": ERROR,
        "react/no-multi-comp": ERROR,
        "react/no-render-return-value": ERROR,
        "react/no-string-refs": ERROR,
        "react/no-unescaped-entities": ERROR,
        "react/no-unknown-property": ERROR,
        "react/prefer-es6-class": [ERROR, "always"],
        "react/react-in-jsx-scope": ERROR,
        "react/require-optimization": OFF,
        "react/require-render-return": ERROR,
        "react/self-closing-comp": ERROR,
        "react/style-prop-object": ERROR,

        "require-yield": ERROR,
        "spaced-comment": [ERROR, "always"],
        strict: [ERROR, "function"],
        "use-isnan": ERROR,
        "valid-typeof": ERROR,
        "vars-on-top": ERROR,
        yoda: ERROR,
    },
};
