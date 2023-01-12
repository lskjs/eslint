module.exports = {
  env: {
    browser: false,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['simple-import-sort', 'prettier', 'json-format'],
  rules: {
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
      },
    ],
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'lines-between-class-members': 'off',
    'func-names': 'off',
    'no-underscore-dangle': 'off',
    'no-throw-literal': 'off',
    'no-plusplus': 'off',

    'prettier/prettier': ['warn', { singleQuote: true }],

    // imports
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
    'import/prefer-default-export': 'off',

    // its for orders
    'import/order': 'off',
    'sort-imports': 'off',
    'simple-import-sort/imports': 'error',
  },
  settings: {
    'json/sort-package-json': [
      'name',
      'version',
      'description',
      'private',
      'browser',
      'scripts',
      'husky',
      'dependencies',
      'devDependencies',
      'peerDependencies',
      'optionalDependencies',
      'files',
      'bin',
      'engines',
      'main',
      'types',
      'typings',
      'exports',
      'imports',
      'productName',
      'repository',
      'homepage',
      'author',
      'bugs',
      'keywords',
      'license',
    ],
  },
};
