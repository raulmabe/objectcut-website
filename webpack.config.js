module.exports = {
  module: {
    rules: [
      // ... other rules omitted
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  // plugin omitted
};
