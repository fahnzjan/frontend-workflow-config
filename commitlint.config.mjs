export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'docs',     // Documentation changes
        'style',    // Code style (formatting, no logic change)
        'refactor', // Code refactoring
        'perf',     // Performance improvement
        'test',     // Add or update tests
        'build',    // Build system or dependencies
        'ci',       // CI configuration
        'chore',    // Other changes
        'revert',   // Revert a commit
      ],
    ],
    'subject-max-length': [2, 'always', 72],
  },
};
