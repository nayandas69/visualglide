# VisualGlide

VisualGlide is a modern, elegant image slider built with pure HTML, CSS, and JavaScript. Designed for showcasing scenic visuals or any kind of media, it delivers a smooth glide effect, layered with interactive animations and a sleek UI.

## Demo Preview

> 📷 **Screenshot:**

![VisualGlide Demo](https://raw.githubusercontent.com/nayandas69/visualglide/refs/heads/main/screenshot.png)

## Features

- Smooth animated transitions
- Fully customizable images, titles, and descriptions
- Zero dependencies — just HTML, CSS, and vanilla JS
- Easily extendable and developer-friendly

## Usage

### Live Preview

To preview locally:

```bash
# Open the project folder and start a live server
open index.html in your browser
```

## How to Customize

You can update the slider content directly in the `index.html` file.

### Example Slide Block:

```html
<div class="card" style="background-image: url('your-image-url.jpg');">
  <div class="caption">
    <div class="title">Your Title</div>
    <div class="desc">Your Description goes here.</div>
    <button>Click Here</button>
  </div>
</div>
```

## Styling & Colors

All color settings and layout dimensions are handled in `main.css`.

### Example — Button Color:

```css
.caption button {
  background-color: #008cba; /* Change this color */
  color: white;
}
```

To personalize the design, edit:

* Background: `body { background: #e4ecf1; }`
* Font: `font-family: 'Segoe UI', sans-serif;`
* Shadows, spacing, borders, and animation duration


## Credits

Created by **[nayandas69](https://github.com/nayandas69)**
Design inspiration and logic rebuilt from scratch with fully customized visuals and text content.

> \[!IMPORTANT]
> You may use this project freely, and modify any content to fit your design goals.
