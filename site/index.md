---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: MakerBadge
layout: landing
footer: A collaboration by <a href="http://twitter.com/chriskonings" target="_blank">@chriskonings</a> & <a href="http://twitter.com/prototypr" target="_blank">@prototypr</a>
---

<h3 class="u-text-center">A badge for all your makes!</h3>

<h4 class="u-text-center">In just two steps</h4>

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
      MakerBadge.init({id: 'USERIDHERE'});
    </script>
  </body>
```
