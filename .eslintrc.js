// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never'],
    'no-shadow': 0,
    'arrow-parens': ['error'],
    'no-else-return': 0,
    'no-useless-escape': 0,
    'no-underscore-dangle': 0,
    'no-nested-ternary': 0,
    'no-empty': 0,
    'prefer-template': 0,
    'no-unused-expressions': 0,
    'consistent-return': 0,
    'no-unreachable': 0,
    'no-console': 0,
    'linebreak-style': 0
  }
}

