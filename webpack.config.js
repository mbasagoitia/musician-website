const path = require('path');

module.exports = {
    resolve: {
        fallback: {
          buffer: require.resolve('buffer/'),
        },
      },
};