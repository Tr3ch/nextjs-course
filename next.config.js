const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'tr3ch',
        mongodb_password: 'aTWduO9d2ulcIv0u',
        mongodb_cluster: 'cluster0',
        mongodb_database: 'my-site-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'tr3ch',
      mongodb_password: 'aTWduO9d2ulcIv0u',
      mongodb_cluster: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};
