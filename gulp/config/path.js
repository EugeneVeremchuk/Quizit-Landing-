import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./build`
const sourceFolder = `./source`

const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/images/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`
	},
	source: {
		js: `${sourceFolder}/js/index.js`,
		images: `${sourceFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${sourceFolder}/images/**/*.svg`,
		sass: `${sourceFolder}/sass/index.sass`,
		html: `${sourceFolder}/*.pug`,
		files: `${sourceFolder}/files/**/*.*`,
		svgicons: `${sourceFolder}/svgicons/*.svg`,
	},
   watch: {
		js: `${sourceFolder}/js/**/*.js`,
		sass: `${sourceFolder}/sass/**/*.sass`,
		html: `${sourceFolder}/**/*.pug`,
		images: `${sourceFolder}/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
		files: `${sourceFolder}/files/**/*.*`
	},
  clean: buildFolder,
	buildFolder,
	sourceFolder,
	rootFolder,
	ftp: ``
}

export default path