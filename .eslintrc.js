module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.base.json', './*/tsconfig.json'],
  },
  env: {
    node: true
  },
  ignorePatterns: ['node_modules/**', '**/.*'],
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'google',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking'  // Add soon!
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',  // Remove eventually!
    '@typescript-eslint/no-var-requires': 'off',  // Remove eventually!

    'require-jsdoc': 'off',  // Remove eventually!
    'valid-jsdoc': 'off',  // Remove eventually!

    'max-len': 'off',
    'padded-blocks': 'off',
    'arrow-parens': 'off',
    'no-invalid-this': 'off',
    'new-cap': 'off',

    'prefer-const': ['error', {destructuring: 'all'}],
    'no-constant-condition': ['error', {checkLoops: false}],
    'no-multi-spaces': ['error', {ignoreEOLComments: true }],
    'spaced-comment': ['error', 'always', {markers: ['/']}],
    '@typescript-eslint/no-unused-vars': ['error', {varsIgnorePattern: '^_', argsIgnorePattern: '^_'}],
    '@typescript-eslint/triple-slash-reference': 'off',
    'comma-dangle': ['error', 'never'],
    'quote-props': ['error', 'as-needed'],
    'sort-imports': ['error', {ignoreCase: true, ignoreDeclarationSort: true}],
    'no-floating-decimal': ['error'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error', {int32Hint: false}],
    'space-unary-ops': ['error', {words: true, nonwords: false}]
  }
};
