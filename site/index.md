---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: MakerBadge
layout: landing
footer: A collaboration by <a href="http://twitter.com/chriskonings" target="_blank">@chriskonings</a> & <a href="http://twitter.com/prototypr" target="_blank">@prototypr</a>
---

<img src="img/mb-browser.gif" style="width:100%;    max-width: 450px;
    margin: 5rem auto;
    display: block;
    border: 4px solid black;
    border-radius: 5px;"/>

<h1 class="landing-header u-text-center"><span class="landing-header__text">MakerBadge</span></h1>

<h4 class="u-text-center">A customizable badge to help your users keep track of your maker activity.</h4>

<!-- <svg class="landing-icon" width="160" height="94" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-width="4"><rect stroke="#CDCDCD" x="2" y="29" width="156" height="63" rx="8"/><circle stroke="#000" fill="#000" fill-rule="nonzero" opacity=".1" cx="57.5" cy="45.5" r="33.5"/><circle stroke="#1D1D1D" fill="#FFF" fill-rule="nonzero" cx="57.5" cy="35.5" r="33.5"/></g></svg> -->


<div style="    text-align: center;
    margin: 5rem auto;
    display: block;">
<a class="btn" href="js/makerbadge.js" download>Download</a>
</div>

<h3 class="u-text-center">Getting started:</h3>

<h4 class="u-text-center">Follow these steps to get started:</h4>

<h2 class="u-text-center">1</h2>

<p class="u-text-center"><b>Download</b> and add the makerbadge.js to your project</p>

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

<div class="u-text-center">
  <img src="img/theme-one.png">
  <img src="img/theme-two.png">
  <img src="img/theme-three.png">
</div>

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

<h2 class="u-text-center">Contribute</h2>

<div class="u-text-center">
  <img height="100" src="img/github.svg"/>
</div>

<h3 class="u-text-center">Proudly an open source project</h3>

<p class="u-text-center">
  Feel free to contribute
  <a target="_blank" href="https://github.com/chriskonings/maker-badge">here</a>
</p>
