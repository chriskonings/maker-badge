# MakerBadge
### An open-source badge to put your mark on every project.

<img src="https://makerbadge.app/img/mb-browser.gif" width="450px" style="
    margin: 5rem auto;
    display: block;
    border: 4px solid black;
    border-radius: 5px;"/>

### How to run the demo site:
To serve jekyll site, from /docs, run: `bundle exec jekyll serve`

<!-- <svg class="landing-icon" width="160" height="94" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-width="4"><rect stroke="#CDCDCD" x="2" y="29" width="156" height="63" rx="8"/><circle stroke="#000" fill="#000" fill-rule="nonzero" opacity=".1" cx="57.5" cy="45.5" r="33.5"/><circle stroke="#1D1D1D" fill="#FFF" fill-rule="nonzero" cx="57.5" cy="35.5" r="33.5"/></g></svg> -->

---

# How to use MakerBadge:
Use it in 2 steps:

## 1. Get your badge:

```html
<!-- Insert makerbadge.js (download or use ☁️cloud version) -->

<script src="//makerbadge.s3.amazonaws.com/makerbadge.js"></script>

<!-- Initialise MakerBadge with options -->
    
<script>
  MakerBadge.init({id: 'USERIDHERE'}); // Product Hunt ID 
</script>
```
Your Product Hunt ID can be foud on your PH profile page (e.g. #309280). 

<a href="js/makerbadge.js" download>Download MakerBadge.js</a>

## 2. Customise your badge (Beta):

Choose from 3 themes, and customise layout:

```html
    <script>
       MakerBadge.init({
        id: 'USERIDHERE', // Product Hunt ID
        theme: 3, // 3 Themes: 1, 2 or 3
        name: 'CUSTOMNAME', // Use any name you want
        twitter: '@yourusername' // Link to twitter
        position: 'left', // left or right
        customHTML: '<div>' //custom embeds e.g. buy me a coffee
      });
    </script>
```

---

# Contribute

Proudly an open source project.

Feel free to contribute <a target="_blank" href="https://github.com/chriskonings/maker-badge">here</a>
