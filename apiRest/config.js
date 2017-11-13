module.exports = {
    port: process.envPORT || 3000,
    db: process.env.MONGODB || 'mongodb://localhost:27017/mean'
  }