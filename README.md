# ariutta-loading
Simple loading style CSS

## How To Use

The parent of the element that will contain your content must have the following styles set:

```css
.my-element-parent-selector {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

Then you just need to reference `ariutta-loading.css` from your HTML page and add the class `ariutta-loading` to your content container element:

```html
<!DOCTYPE html>
<html>

  <head>
    <link rel="stylesheet" href="ariutta-loading.css">
  </head>

  <body>
    <div class="my-element-parent-selector">
      <div class="ariutta-loading">
        <!-- when your content has loaded, remove the ariutta loading class -->
      </div>
    </div>
  </body>

</html>
```

To add via JS, simply require this module:

```js
require('ariutta-loading');
```

# Acknowledgments

Thanks to https://github.com/lukehaas/css-loaders for CSS used as starting point.
