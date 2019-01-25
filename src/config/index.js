export default {
  http: {
    port: process.env.CONFIGURED_PORT || 3000
  },
  database: {
    mongodb: {
      uri: 'mongodb://localhost:27017/cli-source'
    }
  }
}