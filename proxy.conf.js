module.exports = {
    '/api': {
      target: 'https://jsonplaceholder.typicode.com',
      pathRewrite: {
        '^/api': '',
      },
      secure: false,
      changeOrigin: 'true',
    },
  };
  