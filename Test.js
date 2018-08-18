const chalk = require('chalk');

const { log } = console;

module.exports = {
  assertEquals(actual, expected) {
    log(chalk.bold('================================'));
    if (typeof expected !== typeof actual) {
      const header = 'WARNING: Type Difference';
      const expectedStr = `typeof expected: ${typeof expected}`;
      const actualStr = `typeof actual: ${typeof actual}`;

      log(chalk.yellow.inverse.bold(header + ' '.repeat(32 - header.length)));
      log(chalk.yellow.inverse(expectedStr + ' '.repeat(32 - expectedStr.length)));
      log(chalk.yellow.inverse(actualStr + ' '.repeat(32 - actualStr.length)));
    }

    if (actual === expected) {
      log(chalk.green('Expected: ', expected));
      log(chalk.green('Returned: ', actual));
    } else {
      log(chalk.blue('Expected: ', expected));
      log(chalk.red('Returned: ', actual));
    }
  },
};