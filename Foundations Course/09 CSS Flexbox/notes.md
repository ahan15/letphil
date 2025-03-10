# Module 9: CSS Flexbox for Responsive Layouts

### What is Flexbox?
- a one-dimensional layout system that arranges elements horizontally in rows, or vertically in columns.

### Why use Flexbox?
- easier to align elements, centering, spacing, distributing
- adapts to different screen sizes
- great for responsive design
- reduces the need for floats and positioning hacks

### Diagram of Flexbox axes

<!-- ( default )
__________________________________
|       MAIN AXIS (Row)          |
|   --------------------------   |
|  | Item 1 | Item 2 | Item 3 |  | 
|   --------------------------   |
|________________________________|

-->

<!--
__________________________________
|        MAIN AXIS (Column)      |
|  ----------------------------  |
|  | Item 1                      |
|  | Item 2                      |
|  | Item 3                      |
|  ----------------------------  |
|________________________________|

-->

### Controlling the Flex Direction
- the `flex-direction` property controls the main axis direction
- row (default), row-reverse, column, column-reverse


### Controlling Justify Content Direction
- the `justify-content` property controls content on the same row
- flex-start(default), flex-end, center, space-between(same dist inside), space-around(outside half of inside), space-evenly (same dist everywhere)

### Controlling Align Content Direction
- the `align-items` property controls vertical alignment
- flex-start, flex-end, center, stretch(default), baseline(aligns text to baseline)

### Align-Self
- `align-self` overrides the alignment for a single item
- 

### Wrapping Items with Flex Wrap
- by default, items stay in one row
- use flexwrap to allow items to wrap when needed
- nowrap(default), wrap, wrap-reverse

### PROJECT REQUIREMENTS:
- create an html file ( index.html )
- create a CSS file ( styles.css )
- use flexbox to create responsive cards

### BEST PRACTICES:
- use flexbox for one-dimensional layouts
- use justify-content for horizontal alignment 
- use align-items for vertical alignment
- use flex-growth for dynamic sizing
- use flexwrap for responsive layouts

### KEY TAKEAWAYS:
- flexbox simplifies layout design
- flex direction controls row versus columns 
- flex-property grow, shrink, basic controls item size
- 