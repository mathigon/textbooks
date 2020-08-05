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
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',

    'prefer-const': ['error', {destructuring: 'all'}],
    'no-constant-condition': ['error', {checkLoops: false}],
    'no-multi-spaces': ['error', {ignoreEOLComments: true }],
    'spaced-comment': ['error', 'always', {markers: ['/']}],
    '@typescript-eslint/no-unused-vars': ['error', {varsIgnorePattern: '^_', argsIgnorePattern: '^_'}],

    // TODO Remove these eventually, once we update our code!
    '@typescript-eslint/no-explicit-any': 'off',
    'quote-props': 'off',
    'comma-dangle': 'off',
    'max-len': 'off',
    'arrow-parens': 'off',
    'padded-blocks': 'off',
  }
};
