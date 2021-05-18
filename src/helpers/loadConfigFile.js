const logger = require('logger')
const { colors } = require('logger')
require('toml-require').install()
try {
  const CONFIG = require('../../config/user_config.toml')
  module.exports = { CONFIG }
}
catch (e) {
  if (e.code === 'MODULE_NOT_FOUND') {
    logger.error(`${colors.yellow}user_config.toml${colors.reset} not found`)
    logger.error(`Make a copy of ${colors.yellow}template.toml${colors.reset} and name it ${colors.yellow}user_config.toml`)
    process.exit()
  } 
  logger.error(e)
}
