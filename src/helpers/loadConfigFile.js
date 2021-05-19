const logger = require('logger')
const { format } = require('logger')

try {
  module.exports = require('toml-loader')('../../config/user_config.toml')
}
catch (e) {
  if (e.code === 'ENOENT') {
    logger.error(`${format.underscore}user_config.toml${format.reset} not found`)
    logger.error(`Make a copy of ${format.underscore}template.toml${format.reset} and name it ${format.underscore}user_config.toml`)
    process.exit()
  } 
  logger.error(e)
}
