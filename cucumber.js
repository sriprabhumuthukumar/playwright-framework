export default {
  default: {
    import: [
      'steps/*.js',
      'hooks/*.js'
    ],
    format: [
      'progress',
      'json:reports/report.json'
    ]
  }
};