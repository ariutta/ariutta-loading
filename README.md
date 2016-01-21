# ariutta-loading
Simple loading style CSS

## How To Use

The parent of your content container element must have the following styles set:

```css
.my-element-parent-selector {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Option 1: Add via HTML

Reference `ariutta-loading.css` from your HTML page and add the class `ariutta-loading` to your content container element:

```html
<!DOCTYPE html>
<html>

  <head>
    <link rel="stylesheet" href="ariutta-loading.css">
  </head>

  <body>
    <div style="display: flex; align-items: center; justify-content: center;">
      <div class="ariutta-loading">
        <!-- when your content has loaded, remove the ariutta-loading class -->
      </div>
    </div>
  </body>

</html>
```

### Option 2: Add via JS

1. Install: `npm install --save ariutta-loading`
2. Require this module: `require('ariutta-loading');`
3. Set the `ariutta-loading` class on your content container element (be sure parent element styles are set as specified above)

## Acknowledgments

Thanks to https://github.com/lukehaas/css-loaders for CSS used as starting point.
