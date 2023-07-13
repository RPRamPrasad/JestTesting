const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');

module.exports = {
    ...jestConfig,
    coverageThreshold: {
        global: {
          branches: 100,
          functions: 100,
          lines: 85,
          statements: 85,
        },
        'force-app/main/default/lwc/**/*.js': {
          branches: 100,
          functions: 100,
          lines: 85,
          statements: 85,
        },
      },
    modulePathIgnorePatterns: ['<rootDir>/.localdevserver']
};
