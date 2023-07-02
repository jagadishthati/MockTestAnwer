Sure! Here's a concise explanation of each CSS position property with a code example for each:

1. Static: This is the default position value. Elements with a static position are positioned according to the normal flow of the document. They are not affected by the top, right, bottom, or left properties.

```css
.static-example {
  position: static;
}
```

2. Fixed: Elements with a fixed position are positioned relative to the browser window. They do not move when the page is scrolled. Use the top, right, bottom, or left properties to specify the element's position.

```css
.fixed-example {
  position: fixed;
  top: 20px;
  right: 30px;
}
```

3. Sticky: Sticky positioning is a hybrid of relative and fixed positioning. The element is positioned according to the normal flow until a specified offset threshold is reached. Then, it becomes fixed to its container. Use the top, right, bottom, or left properties to set the offset.

```css
.sticky-example {
  position: sticky;
  top: 10px;
}
```

4. Relative: Elements with a relative position are positioned relative to their normal position. Use the top, right, bottom, or left properties to move the element from its original position.

```css
.relative-example {
  position: relative;
  top: 10px;
  left: 20px;
}
```

5. Absolute: Elements with an absolute position are positioned relative to their closest positioned ancestor (an ancestor with a position other than static). If no positioned ancestor is found, the element is positioned relative to the initial containing block (usually the browser window).

```css
.absolute-example {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

These examples provide a brief overview of each CSS position property. It's important to note that the behavior of these properties can vary depending on the context and other CSS properties applied to the elements.