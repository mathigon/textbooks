module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['node_modules/**', 'server/**', '**/*.js', '**/*.d.ts'],
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'google',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',  // TODO Remove eventually!

    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
    'max-len': 'off',
    'padded-blocks': 'off',
    'arrow-parens': 'off',

    'prefer-const': ['error', {destructuring: 'all'}],
    'no-constant-condition': ['error', {checkLoops: false}],
    'no-multi-spaces': ['error', {ignoreEOLComments: true }],
    'spaced-comment': ['error', 'always', {markers: ['/']}],
    '@typescript-eslint/no-unused-vars': ['error', {varsIgnorePattern: '^_', argsIgnorePattern: '^_'}],
    'sort-imports': ['error', {ignoreCase: true, ignoreDeclarationSort: true}],
    'comma-dangle': ['error', 'never'],
    'quote-props': ['error', 'as-needed'],
    'no-floating-decimal': ['error'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error', {int32Hint: false}],
    'space-unary-ops': ['error', {words: true, nonwords: false}]
  }
};
