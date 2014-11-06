
# jQuery is Filled Plugin

This plugin is a simple way to test if a form element is filled or checked

## Example Usage

Use the plugin as follows:

```js
$('input').isFilled();
```

Returns true if target is filled/checked, false if not.

```js
$('input').isFilled('yourvalue');
```

Returns true if target is filled/checked with the passed-in value, false if not.

You can also use the plugin for form validation using conditionals as follows:
```js
// Check if the element is empty
if (!$('#element').isFilled()) {
    // Your input has no value...
}

// Check if the element doesn't match the required value
if (!$('#element').isFilled('myvalue')) {
    // Your input doesn't match...
}
```

To see a working example of this plugin, demo.html has been provided as part of the package.

## Notes & Contribution

Feel free to send me changes and improvements, or file an issue if you notice something isn't working as well as it should be.

This is one of my first Open Source contributions, so be gentle with your feedback!
