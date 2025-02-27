
Display properties: block, inline, flex, grid
Positioning elements: static, relative, absolute, fixed, sticky
Alignment and spacing: top, right, bottom, left, z-index
Overflow handling

## Display properties: block vs inline

block
- starts on a new line
- takes full width
- div, key, hq, and section are all block by default
- stacks

inline
- only takes needed width
- default inline examples: span, a, strong
- stays on same line


## CSS Positioning types
- Static (default) | Normal flow, no positioning
- Relative | Moves relative to its normal position
- Absolute | Moves relative to the nearest positioned ancestor
- Fixed | Stayes fixed on the screen
- Sticky | Sticks when scrolling past a point


## Controlling Element Placement
- z-index: larger means more out of the page


## Handling Overflow
- overflow: hidden
- overflow is visible by default
- overflow: auto, creates a scroll wheel as needed


## Build a sticky navbar
Create an HTML file ( index.html )
create a CSS file ( styles.css )
make navbar sticky

## Best Practices:
- Use relative for elements that move within normal flow
- Use absolute inside a positioned parent
- Use fixed for always visible elements (like floating buttons)
- Use sticky for navigation bars
- Use z-index only when necessary (higher values go on top)

## Key Takeaways:
- The display property controls how elements appear
- position controls where elements are placed
- z-index controls layering
- overflow manages content visibility
- sticky, fixed, and absolute have different use cases

