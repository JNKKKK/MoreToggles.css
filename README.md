# MoreToggles.css

`MoreToggles.css` is a **pure CSS** library that provides you with a variety of **nice-looking toggles**. 

[![banner](https://github.com/JNKKKK/MoreToggles.css/raw/master/banner.png)](https://jnkkkk.github.io/MoreToggles.css/)

![release badge](https://img.shields.io/github/v/release/JNKKKK/MoreToggles.css?include_prereleases&style=flat-square) 
![jsDelivr hits badge](https://img.shields.io/jsdelivr/gh/hm/JNKKKK/MoreToggles.css?style=flat-square)
![npm](https://img.shields.io/npm/dm/moretoggles?style=flat-square&logo=npm)
![license badge](https://img.shields.io/github/license/JNKKKK/MoreToggles.css?style=flat-square) 

------

You only have to attach a class to the wrapper div and `MoreToggles.css` will do the magic for you.

[Check out **all available styles** here](https://jnkkkk.github.io/MoreToggles.css/)

**Features**

🔹  Pure CSS

🔹  13 different styles (more styles are coming) 

🔹  Perfect scaling

## Usage

Import the stylesheet into your document's `<head>`
```html
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/JNKKKK/MoreToggles.css@1.0.0/output/moretoggles.min.css">
</head>
```
Wrap an extra div around your `<input>` and `<label>`. Pick a style [here](https://jnkkkk.github.io/MoreToggles.css/)
. Add the corresponding `mt-*` class to `<div>`.

```html
<div class="mt-ios"> 
  <input id="1" type="checkbox" />
  <label for="1"></label>
</div>
```

### Moretoggles.css is also available through [NPM](https://www.npmjs.com/package/moretoggles)
```bash
npm install moretoggles
```
**Import in js/jsx**
```js
// Import the minified CSS
import '../node_modules/moretoggles/output/moretoggles.min.css'

// Or
// import the Sass source file
import '../node_modules/moretoggles/src/moretoggles.scss'
```
Or **import in Sass**
```scss
@charset "utf-8";
@import "../node_modules/moretoggles/src/moretoggles";
```

## Styles
`MoreToggles.css` currently has 13 different styles. And for each style, several color patterns are provided.

[Check out **all available styles** here](https://jnkkkk.github.io/MoreToggles.css/)

To choose a style, replce the class name of the wrapper `<div>` with one of the options [here](https://jnkkkk.github.io/MoreToggles.css/).

```html
<div class="REPLACE_ME"> 
  <input id="2" type="checkbox" />
  <label for="2"></label>
</div>
```

Example for `.mt-android-pink` style

```html
<div class="mt-android-pink"> 
  <input id="3" type="checkbox" />
  <label for="3"></label>
</div>
```


## Import Only a Single Style
If you care about the size of CSS files. Instead of importing `moretoggles.min.css`, you can import single style separately.

In the `/output` folder, you can find all of the built CSS files.

The naming convention is `moretoggles.STYLE_NAME.min.css`

Example for importing only *Android* Style
```html
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/JNKKKK/MoreToggles.css@0.2.1/output/moretoggles.android.min.css">
</head>
```

## Size / Scaling
You can change the size of the toggles by assigning a font-size attribute `style="font-size:10px;"` to the wrapper div. You can try different numbers and the toggle will scale smoothly.
```html
<div class="mt-ios" style="font-size:10px;">
  <input id="4" type="checkbox" />
  <label for="4"></label>
</div>
```

## Disabled Toggles
Just like regular checkbox, you can add `disabled` attribute to `<input>` tag.
```html
<div class="mt-ios">
  <input id="5" type="checkbox" disabled/>
  <label for="5"></label>
</div>
```

## Listening to the change event
Since the toggle is actually an `<input>` with `type="checkbox"`, you can use addEventListener to listen to the onchange event.
```html
<div class="mt-ios"> 
  <input id="6" type="checkbox" />
  <label for="6"></label>
</div>

<script>
  const toggle = document.getElementById('6');

  toggle.addEventListener('change', (event) => {
    if (event.target.checked) {
      alert('checked');
    } else {
      alert('not checked');
    }
  });
</script>
```

## Notice

Nesting the `<input>` directly inside the `<label>` is **NOT supported**, although it is valid HTML syntax.

**Don't** ☹️
```html
<div class="mt-ios"> 
  <label>
    <input type="checkbox" />
  </label>
</div>
```
**Do** 😃
```html
<div class="mt-ios"> 
  <input id="1" type="checkbox" />
  <label for="1"></label>
</div>
```


## License
MoreToggles.css is licensed under the MIT license. (https://opensource.org/licenses/MIT)

## Contributing
This project is still in very early stage. Your contribution is very welcome. Feel free to submit a pull request!

### Development Workflow

1. `npm install`
2. `npm run start` This will start the webpack-dev-server and render the [showcase page](https://jnkkkk.github.io/MoreToggles.css/)
3. Make changes and see live updates in the browser
4. Build the **[showcase page](https://jnkkkk.github.io/MoreToggles.css/)** and **compile Sass to CSS in `/output`**
   - `npm run build-doc`
   - `npm run build-css`
