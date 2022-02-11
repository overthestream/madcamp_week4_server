module.exports = {
  apps: [{
  name: 'app',
  script: './dist/index.js',
  instances: 0,
  exec_mode: 'cluster'
  }]
}