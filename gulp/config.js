var buildPath = 'build';

var scriptPath = 'src/main.js';
var scriptMetaPath = 'src/main.header.js';

var outputName = 'tagpro-ractive.user.js';
var outputMetaName = 'tagpro-ractive.meta.js';

module.exports = {
	scripts: {
		src: scriptPath,
		srcHeader: scriptMetaPath,
		dest: buildPath,
		outputName: outputName,
		outputMetaName: outputMetaName
	},
	example: {
		src: 'example/**',
		dest: buildPath
	},
	browserSync: {
		src: [buildPath + '/**'],
		baseDir: buildPath
	},
	publish: {
		src: buildPath
	}
};