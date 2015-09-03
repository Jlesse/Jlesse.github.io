What did you learn about CSS padding, borders, and
 margin by doing this challenge?
What did you learn about CSS positioning?
What aspects of your design did you find easiest to
implement? What was most difficult?
What did you learn about adding and formatting
elements with CSS in this challenge?

[HERE IS MY SITE](https://github.com/jlesse/jlesse.github.io/)

I learned that CSS is very frustrating. Haha, just
kidding... sort of. I had a lot difficulty
understanding how to position elements until I
played with the chrome dev tools for a while. It
helped me to understand how the box model works
and how to use it. Essentially, every element on
the page is a box. This box has dimensional
properties including: margin, border, padding,
height and width. The innermost size is determined
by the height and width. Padding creates space
between the border and the inner core. The border
sets the boundary between the padding and the
margin. The margin separates the element from
other outside elements. The real dimensions of the
a side of the box can be determined by adding the
core size, pad, border, and margin for any given
side. Its very confusing to explain, its probably
best to just look at a picture, and check out [this website.](http://learn.shayhowe.com/html-
css/opening-the-box-model/)

Despite learning this, I still had a lot of
difficulty positioning some elements the way I
wanted. I think I kind of did some things in a
stupid kind of hack way, but I got them to work
and validate. I had a lot of trouble placing an
article within a section next to the list of links
on my blog. I tried adjusting the padding, margin,
 etc., and I just couldn't logic it out. I think
 it may have had something to do with some of the
 other margin or pad values of other elements, or
 maybe something to do with inline vs. block vs.
 inline-block values. My dumb hack was to remove
 the list from the section, put it in a new
 section, and force it over the old section with a
 higher z-index. In the future I think I need to
 pay more attention to the dev tools and working
 with block elements from the beginning. I think
 CSS positioning is something I will have to play
 with more in the future, as it can be really
 complicated and frustrating working with the box
 model. Outside of positioning, I thought CSS was
 a breeze. I had a lot of fun placing images on my
 page and choosing fonts and colors.

In terms of adding and formatting elements, I
learned that its best to use an external style
sheet and reuse CSS code when possible. I was able
to use my default style sheet for about 90% of my
CSS code. I didn't use any ids', its a bad
practice unless you are using them to select an
element with javascript. In addition, by using
classes I was able to recycle a lot of code. As
far as formatting elements, I played with so many
different things, not all of which I liked, or
even worked. I looked at background gradients, and
all the different properties for a background image
. I basically would start to type in a CSS style,
look at the auto-complete list, and then look up
what something did if it sounded interesting and
try and use it.
