var sass = require('sass');
const fs = require('fs')
const postcss = require('postcss')
const cssnano = require('cssnano')

function build (input, output) {
    let sassResult = sass.compile(input);
    postcss([cssnano])
        .process(sassResult.css, { from: undefined, to: undefined, map: false })
        .then(result => {
            fs.writeFile(output, result.css, () => true)
        })
}

// build main target
console.log(`Building moretoggles.min.css`)
build('./src/moretoggles.scss', './output/moretoggles.min.css')

// build seperate styles
fs.readdir('./src/styles', (err, files) => {
    files.forEach(file => {
        let filename = file.split('.')[0].substring(1)
        console.log(`Building style ${filename}`)
        build(`./src/styles/${file}`, `./output/moretoggles.${filename}.min.css`)
    });
});


