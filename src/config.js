module.exports = {
  PORT: process.env.PORT || 8080,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_TOKEN: process.env.API_TOKEN || 'dummy token',
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:8080',
};
