const Bundler = require('parcel-bundler');
const Path = require('path');

let files = [
    {
        input: './src/moretoggles.scss',
        output: 'moretoggles.min.css'
    }, {
        input: './src/styles/_android.scss',
        output: 'moretoggles.android.min.css'
    }, {
        input: './src/styles/_check.scss',
        output: 'moretoggles.check.min.css'
    }, {
        input: './src/styles/_emoji.scss',
        output: 'moretoggles.emoji.min.css'
    }, {
        input: './src/styles/_heart.scss',
        output: 'moretoggles.heart.min.css'
    }, {
        input: './src/styles/_icon.scss',
        output: 'moretoggles.icon.min.css'
    }, {
        input: './src/styles/_io.scss',
        output: 'moretoggles.io.min.css'
    }, {
        input: './src/styles/_ios.scss',
        output: 'moretoggles.ios.min.css'
    }, {
        input: './src/styles/_normal.scss',
        output: 'moretoggles.normal.min.css'
    }, {
        input: './src/styles/_square.scss',
        output: 'moretoggles.square.min.css'
    }, {
        input: './src/styles/_square3d.scss',
        output: 'moretoggles.square3d.min.css'
    }, {
        input: './src/styles/_star.scss',
        output: 'moretoggles.star.min.css'
    }, {
        input: './src/styles/_transparent.scss',
        output: 'moretoggles.transparent.min.css'
    }, {
        input: './src/styles/_yesno.scss',
        output: 'moretoggles.yesno.min.css'
    },
];

async function build () {
    for (f of files) {
        let entryFiles = Path.join(__dirname, f.input);
        let options = {
            outDir: './output',
            outFile: f.output,
            minify: true,
            target: 'node',
            watch: false,
            sourceMaps: false,
        };
        let bundler = new Bundler(entryFiles, options);
        let bundle = await bundler.bundle();
    }
}

build()
