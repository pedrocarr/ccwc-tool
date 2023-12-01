import { exec } from 'child_process';
import { assert } from 'chai';

function runCliCommand(command, callback) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      callback(error.message);
    } else {
      callback(stdout.trim());
    }
  });
};

describe('My JavaScript WC Tool', () => {
  it('should return the error message if unknown commands are provided', (done) => {
    runCliCommand('node ./cmd/ccwc/cli.js -a test.txt', (output) => {
      assert.include(output, 'Not a valid command! Usage: ccwc -c|-l|-w|-m [fileName]');
      done();
    });
  });

  it('should return the usage message if no commands are provided', (done) => {
    runCliCommand('node ./cmd/ccwc/cli.js', (output) => {
      assert.equal(output, 'Usage: ccwc -c|-l|-w|-m [fileName]');
      done();
    });
  });

  it('should return the correct byte count', (done) => {
    runCliCommand('node ./cmd/ccwc/cli.js -c test.txt', (output) => {
      assert.equal(output, '342190 test.txt');
      done();
    });
  });

  it('should return the correct line count', (done) => {
    runCliCommand('node ./cmd/ccwc/cli.js -l test.txt', (output) => {
      assert.equal(output, '7146 test.txt');
      done();
    });
  });

  it('should return the correct word count', (done) => {
    runCliCommand('node ./cmd/ccwc/cli.js -w test.txt', (output) => {
      assert.equal(output, '58164 test.txt');
      done();
    });
  });

  it('should return the correct character count', (done) => {
    runCliCommand('node ./cmd/ccwc/cli.js -m test.txt', (output) => {
      assert.equal(output, '339292 test.txt');
      done();
    });
  });

  it('should return the default result (lines words bytes filename) if no option is provided', (done) => {
    runCliCommand('node ./cmd/ccwc/cli.js test.txt', (output) => {
      assert.equal(output, '7146 58164 342190 test.txt');
      done();
    });
  });

  it('should return the correct number of lines with the input comes from bash', (done) => {
    runCliCommand('cat test.txt | node ./cmd/ccwc/cli.js -l', (output) => {
      assert.equal(output, '7146');
      done();
    });
  });
});