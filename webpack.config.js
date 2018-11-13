//webpack.config.js
const path= require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //引入插件
const webpack = require ('webpack');

module.exports ={
	entry:'./src/index.js',       //入口文件
	output:{                      //webpack打包后的出口文件
		filename:'app.js',         //打包后js名称
		path:path.resolve(__dirname,'dist')  //打包后自动输出目录
	},
	module:{
		rules:[
			{
				test:/\.css$/,    //配置style 用于引入css文件
				use:['style-loader','css-loader']
			},
			{
				test:/\.(png|svg|jpg|gif)$/,  //配置图片 
				use:['url-loader']
			},
			{
				test:/\.(woff|woff2|eot|ttf|otf)$/,
				use:['url-loader']
			},
			{
				test:/\.(js|jsx)$/,   //React组件由JSX组成，浏览器无法识别JSX，需要babel进行转换。
				exclude:/node_modules/,
				use:{
					loader:'babel-loader'
				}
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:'production',
			template:"./index.html"  //模板文件位置
		}),   //将静态文件打包成一个js 后 把js放到html里面
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer:{
		contentBase: "./dist",   //热加载
		hot:true
	},
};


