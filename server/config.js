const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://evolent:evolent123@ds145881.mlab.com:45881/evolent',
  port: process.env.PORT || 8000,
};

export default config;
