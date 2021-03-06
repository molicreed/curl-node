const process = require('process')
const program = require('commander')

program
  .version('0.0.1')
  .usage('curl [options...] <url>')
  .option('-i, --include', 'Include protocol headers in the output (H/F)') //done
  .option('-d, --data DATA', 'HTTP POST data ')
  .option('-X, --request COMMAND', 'Specify request command to use')
  .option('-o, --output FILE [filename]', 'Write to FILE instead of stdout') //done
  .option('-v, --verbose', 'Make the operation more talkative') //done
  .parse(process.argv)

program.url = program.args[0]
if (porgram.data) program.request = 'POST'
module.exports = program