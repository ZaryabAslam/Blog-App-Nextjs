const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
    // if current phase is development, use dev database
    // phase is by default param here
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // develeopment datbase
    return {
      env: {
        mongodb_username: "admin",
        mongodb_password: "admin",
        mongodb_clustername: "cluster0",
      },
    };
  }
  // production datbase configs
  return {
    env: {
      mongodb_username: "admin",
      mongodb_password: "admin",
      mongodb_clustername: "cluster0-prod",
    },
  };
};
// next.config.js is by default file provided by nextjs
