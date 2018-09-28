---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: MakerBadge
layout: landing
footer: A collaboration by <a href="http://twitter.com/chriskonings" target="_blank">@chriskonings</a> & <a href="http://twitter.com/prototypr" target="_blank">@prototypr</a>
---

<h1 class="landing-header u-text-center"><span class="landing-header__text">MakerBadge</span></h1>

<h2 class="u-text-center">Built something awesome today?</h2>

<h3 class="u-text-center">Leave your makers mark!</h3>

<svg class="landing-icon" width="160" height="94" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-width="4"><rect stroke="#CDCDCD" x="2" y="29" width="156" height="63" rx="8"/><circle stroke="#000" fill="#000" fill-rule="nonzero" opacity=".1" cx="57.5" cy="45.5" r="33.5"/><circle stroke="#1D1D1D" fill="#FFF" fill-rule="nonzero" cx="57.5" cy="35.5" r="33.5"/></g></svg>

<div class="u-text-center"><small>Your maker tracker</small></div>

<h4 class="u-text-center">Follow these steps to get started:</h4>

<h2 class="u-text-center">1</h2>

<p class="u-text-center">Add the makerbadge.js to your project</p>

```html
  <body>
    YOUR CONTENT
    <!-- Insert before closing body tag -->
    <script src="makerbadge.js"></script>
  </body>
```

<h2 class="u-text-center">2</h2>

<p class="u-text-center">Initialise MakerBadge</p>

```html
  <body>
    YOUR CONTENT
    <!-- Insert before closing body tag -->
    <script src="makerbadge.js"></script>
    <!-- Initialise MakerBadge with options -->
    <script>
      MakerBadge.init({id: 'USERIDHERE'}); // Product Hunt ID
    </script>
  </body>
```

<h2 class="u-text-center">3</h2>

<p class="u-text-center">Customise</p>

```html
  <body>
    YOUR CONTENT
    <!-- Insert before closing body tag -->
    <script src="makerbadge.js"></script>
    <!-- Initialise MakerBadge with options -->
    <script>
      MakerBadge.init({
        id: 'USERIDHERE', // Product Hunt ID
        position: 'left', // left or right
        name: 'CUSTOMNAME', // Use any name you want
        twitter: '@yourusername' // Link to twitter
      });
    </script>
  </body>
```

<h2 class="u-text-center">Choose a theme</h2>

<p class="u-text-center">Three themes to choose</p>

```html
  <body>
    YOUR CONTENT
    <!-- Insert before closing body tag -->
    <script src="makerbadge.js"></script>
    <!-- Initialise MakerBadge with options -->
    <script>
      MakerBadge.init({
        id: 'USERIDHERE', // Product Hunt ID
        theme: 3 // 1, 2 or 3
      });
    </script>
  </body>
```
