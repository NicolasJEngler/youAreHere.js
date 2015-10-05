# youAreHere.js
A lightweight, vanilla JS, scroll position indicator.

#### Check this plugin in action right here: (http://nicolasjengler.github.io/youAreHere.js/demo/)[http://nicolasjengler.github.io/youAreHere.js/demo/]

**youAreHere.js** is a lightweight, dependency-free, vanilla JS plugin to indicate the user's current scroll position on a website. It is currently in alpha state, and it should be used with that in mind. 


### Usage
The only thing you should do is place the JS file and link it in your document like this:

```html
<script src="js/youarehere.min.js"></script>
```

Some of the scrollbar properties can be set through a function like this:

```javascript
youAreHere({
  height: '5px', // Accepts values in px, %, and rem (if the root font-size has been properly set)
  color: '#2e2e2e', // Accepts HEX, RGB and RGBA values
  easing: true // If true a cubic-bezier easeInOutQuart value is set with a 3ms duration
});
```

| Property | Value                            |
|----------|----------------------------------|
| height   | _(string)_ 3px by _default_      |
| color    | _(string)_ #472836 by _default_  |
| easing   | _(boolean)_ false by _default_   |

---
Please keep in mind that this is my first JS-only plugin, so there's going to be a ton of things to improve. Of course pull requests and feedback are both welcome!