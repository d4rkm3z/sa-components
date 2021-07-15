module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  plugins: ['simple-import-sort'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/prop-types': 'off',
    'no-implicit-coercion': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/camelcase': 'off',
  },
  overrides: [
    {
      files: ['**/.stories.'],
      rules: {
        'import/no-anonymous-default-export': 'off'
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              [
                '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
                '^react',
                '^@?\\w',
                '^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)',
                '^\\u0000',
                '^\\.\\.(?!/?$)',
                '^\\.\\./?$',
                '^\\./(?=.*/)(?!/?$)',
                '^\\.(?!/?$)',
                '^\\./?$',
              ],
              // Style imports.
              ['^.+\\.s?css$'],
            ],
          },
        ],
      },
    },
  ],
}
