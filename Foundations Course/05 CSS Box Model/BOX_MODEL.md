<!-- 

+----------------------------+  <-- Margin
|                            |
|  +----------------------+  |  <-- Border
|  |  +----------------+  |  |  <-- Padding 
|  |  |     Content    |  |  |
|  |  +----------------+  |  |
|  +----------------------+  |
|                            |
+----------------------------+

-->

<!-- padding shorthand: top right bottom left -->
<!-- margin shorthand: top right bottom left -->
<!-- border shorthand: width style color -->
<!-- border styles: solid, dashed, double, groove, ridge, inset, outset -->
<!-- border-radius: use half of square width/heigh to create circle -->
<!-- box-shadow: x-offset, y-offset, blur-radius, color -->

# `margin: auto` automatically centers content

element's height and width do not include border/padding
therefore, the element size is actually larger than it is declared.
SOLUTION: Use `box-sizing: border-box;` to get desired size.

