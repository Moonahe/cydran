var path = require('path');

var libraryName = 'cydran';
const { spawn } = require('child_process');

function DtsBundlePlugin(){}
DtsBundlePlugin.prototype.apply = function (compiler) {
	compiler.plugin('done', function() {

		const child = spawn("node_modules/dts-bundle-generator/bin/dts-bundle-generator.js", ["dist/src/index.d.ts", "-o", "dist/cydran.d.ts", "--umd-module-name", "cydran"]);

		child.on('exit', function (code, signal) {
			if (code !== 0) {
				console.log("child process exited with code " + code + " and signal " + signal);
			}
		});

		child.stdout.on('data', (data) => {
			console.log(data+'');
		});

		child.stderr.on('data', (data) => {
			console.log(data+'');
		});

	});
};

module.exports = {
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'cydran.js',
		library: 'cydran',
		libraryTarget: 'umd'
	},
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
//    devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				loader: 'raw-loader'
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			}
		]
	}
	,plugins: [new DtsBundlePlugin()]
};
