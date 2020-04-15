const path = require("path");
const glob = require("glob");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const { NODE_ENV } = process.env;
const isProd = NODE_ENV === "production";


const entries = {}
const srcDir = "app/frontend/src/";

glob.sync("**/*.js", {
  cwd: srcDir + 'entries/'
}).forEach(filePath => {
  const pathObj = path.parse(filePath);
  const name = `${pathObj.dir}/${pathObj.name}`;
  entries[name] = path.resolve(__dirname, srcDir, 'entries', filePath);
});
entries["styles"] = path.resolve(__dirname, srcDir, 'styles/assets.scss');

module.exports = {
  mode: isProd ? "production" : "development",
  devtool: "source-map",
  entry: entries,
  output: {
    path: path.resolve(__dirname, "public/packs"),
    publicPath: "/packs/",
    filename: isProd ? "[name]-[hash].js" : "[name].js"
  },
  resolve: {
    extensions: [".js", ".vue", ".scss"],
    alias: {
      vue$: "vue/diist/vue.esm.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test:  /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new WebpackAssetsManifest({ publickPath: true }),
    new MiniCssExtractPlugin({
      filename: isProd ? "[name]-[hash].css" : "[name].css"
    })
  ]
};
