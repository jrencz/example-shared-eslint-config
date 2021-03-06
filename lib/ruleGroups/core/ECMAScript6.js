// @see http://eslint.org/docs/rules/#ecmascript-6
module.exports = {
  'arrow-body-style': ['error',
    'as-needed',
  ],
  'arrow-parens': ['error',
    'as-needed',
  ],
  'arrow-spacing': 'error',
  'constructor-super': 'error',
  'generator-star-spacing': ['error', {
    before: true,
    after: false,
  }],
  'no-class-assign': 'error',
  'no-confusing-arrow': 'off',
  'no-const-assign': 'error',
  'no-dupe-class-members': 'error',
  'no-duplicate-imports': 'error',
  'no-new-symbol': 'error',
  'no-restricted-imports': 'off',
  'no-this-before-super': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-constructor': 'error',
  'no-useless-rename': 'error',
  'no-var': 'error',
  'object-shorthand': 'error',
  'prefer-arrow-callback': 'error',
  'prefer-const': 'error',

  // Rule configuration is not flexible enough as for now.
  'prefer-destructuring': 'off',
  'prefer-numeric-literals': 'error',
  'prefer-reflect': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'require-yield': 'off',
  'rest-spread-spacing': ['error',
    'never',
  ],

  // TODO: think about this rule. It has not way to express that imports may be
  // grouped and that.
  // See: https://github.com/eslint/eslint/issues/7766
  'sort-imports': ['error', {
    ignoreCase: true,
    memberSyntaxSortOrder: [
      'all',
      'single',
      'multiple',
      'none',
    ],
  }],
  'symbol-description': 'error',
  'template-curly-spacing': ['error',
    'always',
  ],
  'yield-star-spacing': ['error', {
    before: true,
    after: false,
  }],
};
