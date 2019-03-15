module.exports = {
  hostname: process.argv[2] || process.env.HOSTNAME || '0.0.0.0',
  port: process.argv[3] || process.env.PORT || 3000,
};
