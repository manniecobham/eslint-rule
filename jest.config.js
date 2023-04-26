module.exports = {
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    testPathIgnorePatterns: ['/node_modules/'],
    setupFilesAfterEnv: ['./jest.setup.js'],
};
  