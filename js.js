module.exports = {
  env: {
    browser: false,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
  ],
  plugins: [
    'simple-import-sort',
    'prettier',
  ],
  rules: {
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
      },
    ],
    'prettier/prettier': 'warn',
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'lines-between-class-members': 'off',
    'func-names': 'off',
    'no-underscore-dangle': 'off',
    'no-throw-literal': 'off',
  
    // imports
    'import/extensions': ['error', 'ignorePackages', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: false, optionalDependencies: true, peerDependencies: true },
    ],
    // its for orders
    'import/order': 'off',
    'sort-imports': 'off',
    'simple-import-sort/imports': 'error',
  }
}
