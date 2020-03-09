# MoreToggles.css

[![Toggles _1_.png](https://i.loli.net/2020/03/06/WRC2jYFuo1SqpVZ.png)](https://jnkkkk.github.io/MoreToggles.css/allToggles.html)

![release badge](https://img.shields.io/github/v/release/JNKKKK/MoreToggles.css?include_prereleases&style=flat-square) ![license badge](https://img.shields.io/github/license/JNKKKK/MoreToggles.css?style=flat-square)

------

`MoreToggles.css` is a **pure CSS** library that provides you with a variety of **nice-looking toggles**. 

You only have to add a new ClassName to the wrapper div and `MoreToggles.css` will do the magic for you.

[Check out **all available styles** here](https://jnkkkk.github.io/MoreToggles.css/allToggles.html)

**Features**

🔹  Pure CSS

🔹  12 different styles (more styles are coming) 

🔹  Perfect scaling

## Usage

Import the stylesheet into your document's `<head>`
```html
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/JNKKKK/MoreToggles.css/output/moretoggles.min.css">
</head>
```
Wrap an extra div around your `<input>` and `<label>`. Pick a style [here](https://jnkkkk.github.io/MoreToggles.css/allToggles.html)
. Add the corresponding `mt-*` class to `<div>`.

```html
<div class="mt-ios"> 
  <input id="1" type="checkbox" />
  <label for="1"></label>
</div>
```


## Styles
`MoreToggles.css` currently has 12 different styles. And for each style, several color palettes are provided.

[Check out **all available styles** here](https://jnkkkk.github.io/MoreToggles.css/allToggles.html)

List of all the available class names:

*IOS* Style
`mt-ios` `mt-ios-red` `mt-ios-blue`

*Android* Style
`mt-android` `mt-android-indigo` `mt-android-violet` `mt-android-pink` `mt-android-orange`

*IO Switch* Style
`mt-io` `mt-io-yellow` `mt-io-garden` `mt-io-navi` `mt-io-violet`

*Normal* Style
`mt-normal` `mt-normal-garden` `mt-normal-navi` `mt-normal-violet` `mt-normal-juice`

*Transparent* Style
`mt-transparent` `mt-transparent-navi` `mt-transparent-violet` `mt-transparent-blood` `mt-transparent-brown`

*Check* Style
`mt-check` `mt-check-garden` `mt-check-matte` `mt-check-fruit` `mt-check-pink`

*Square* Style
`mt-square` `mt-square-garden` `mt-square-tomato` `mt-square-matcha` `mt-square-pink`

*Square 3d* Style
`mt-square3d` `mt-square3d-garden` `mt-square3d-tomato` `mt-square3d-matcha` `mt-square3d-blush`

*Emoji* Style
`mt-emoji-mood` `mt-emoji-gender` `mt-emoji-pet` `mt-emoji-mute` `mt-emoji-like`

*Star* Style
`mt-star` `mt-star-garden` `mt-star-tomato` `mt-star-pink` `mt-star-golden`

*Heart* Style
`mt-heart` `mt-heart-blush` `mt-heart-indigo` `mt-heart-pink` `mt-heart-golden`

*Icon Switch* Style
`mt-icon-music` `mt-icon-ring` `mt-icon-mic` `mt-icon-cam` `mt-icon-pin`

## Scaling
You can scale the toggles by assign a font-size attribute `style="font-size:10px;"` to the wrapper div. You can try different numbers and the toggle will scale smoothly.
```html
<div class="mt-ios" style="font-size:10px;">
  <input id="3" type="checkbox" />
  <label for="3"></label>
</div>
```

## Disabled Toggles
Just like regular checkbox, you can add `disabled` attribute to `<input>` tag.
```html
<div class="mt-ios">
  <input id="4" type="checkbox" disabled/>
  <label for="4"></label>
</div>
```

## Listening to the change event
Since the toggle is actually an `<input>` with `type="checkbox"`, you can use addEventListener to listen to the onchange event.
```html
<div class="mt-ios"> 
  <input id="5" type="checkbox" />
  <label for="5"></label>
</div>

<script>
  const toggle = document.getElementById('5');

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

Nest the `<input>` directly inside the `<label>` is **NOT supported**, although it is valid HTML syntax.

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
