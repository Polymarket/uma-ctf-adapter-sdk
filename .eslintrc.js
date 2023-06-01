module.exports = {
    parserOptions: {
        "project": "./tsconfig.json",
        "tsconfigRootDir": __dirname,
        "sourceType": "module"
    },
    rules: {
        "no-console": "off",
        "prefer-const": "off",
        "no-explicit-any": "off"
    },
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
};
