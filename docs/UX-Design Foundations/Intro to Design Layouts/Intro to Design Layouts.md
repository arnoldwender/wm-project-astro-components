**Intro to Design Layouts**  
Acquaint yourself with the building blocks that make up a design's basic architecture  
  
7m read  
  
13 exercises  
  
250 PX  
Start lesson  
  
  
  
Think of a layout as the architecture of a digital product. There are certain rules and guidelines you should follow when organizing elements within a grid, the same as you would when designing a building. If the elements in your layout present usability problems, it will ruin the whole user experience.   
Design principles like alignment, white space, proximity, proportion, etc., help organize content so users can easily navigate it and accomplish their goals.   
**EXERCISE #1**  
**Spacing**  
##   
  
Spacing is a set of rules that clarify how elements in an interface should be arranged. It includes the measurable values that define distances inside and outside of elements. When spacing is consistent, it helps maintain a clean and organized layout and makes it easier for users to navigate your product.  
* **Layout spacing:** Layout spacing defines the distances between the most significant elements (for example, between a top bar and content, or the sidebar and content) and the page itself. Material Design guidelines recommend aligning elements to 8dp and sizing them in 8dp increments to ensure a consistent visual rhythm across screens.++[[1]](https://app.uxcel.com/#anchor-1)++  
* **Component spacing: **Component spacing defines the spatial relationships within a given component, like the distance between a button’s icon and label. If you don't maintain this spacing consistently across all the buttons on your page, it can be subconsciously jarring to users and look sloppy. Maintaining consistency here brings balance to your UI components, so take the time to establish rules for use across the entire product.  
**Pro Tip:** Utilize a 4dp grid to align small elements like icons or typography within components.  
  
  
  
  
  
**EXERCISE #2**  
**Margins**  
##   
  
Margins are the space between elements. This could be the space around a button, between columns, or between an image and surrounding text content. Margins are the basic building blocks of layout spacing.  
Margins also give us white space (or negative space) on a page. Think of this as breathing room on the page, helping to eliminate visual clutter. White space also helps maintain balance and rhythm on the page between elements.  
  
  
  
  
  
**EXERCISE #3**  
**Paddings**  
##   
  
While margins are external, paddings are internal. Padding is the space within an element’s bounds, starting with the border and extending to the next inner element. For example, if a button is a component, the spacing between the button’s label and the edge of the button is the padding.  
Virtually every element has padding. This prevents insufficient space in responsive designs when viewed on smaller screens.  
**Pro Tip:** Always set minimum paddings for elements — we recommend no less than 12px.  
  
  
  
  
  
**EXERCISE #4**  
**Keylines**  
##   
  
Keylines are imaginary lines that help align elements that are placed outside of the layout grid. They also allow designers to determine the distance between elements from the edge of the screen.  
Keylines are vital for keeping your content balanced, especially among different types of neighboring elements, such as a profile picture and text accompanying it.  
  
  
  
  
  
**EXERCISE #5**  
**Left alignment**  
##   
  
Left alignment means that design elements line up with the left margin or gutter, creating a straight edge on that side. It's particularly common in languages that read from left to right, as it aligns with our natural reading flow. This makes it easier for users to scan content quickly and efficiently.  
Whether you're working with text, images, or other graphical elements, left alignment creates a clean, organized look that improves readability. It's often the go-to choice for long blocks of text, such as articles or blog posts, but it's versatile enough for various design contexts. So when in doubt, left alignment is a solid, user-friendly option.  
**Pro Tip:** Use left alignment for large blocks of text to increase readability.  
  
  
  
  
  
**EXERCISE #6**  
**Right alignment**  
##   
  
Right alignment tucks elements against the right margin or the parent element's right boundary. It's a rare choice in design, especially for languages that read from left to right, because it disrupts the natural reading flow by creating uneven starting points for text lines.  
However, right alignment has its moments—like when you're working with numeric data, side notes, or secondary actions—to make these stand out or fit neatly in specific layouts. Just be cautious when considering it for text-heavy sections; it's not the friendliest option for readability.  
  
  
  
  
  
**EXERCISE #7**  
**Center alignment**  
##   
  
Center alignment can refer to both horizontal and vertical alignment. In center alignment, elements are aligned along an imaginary central line. It’s commonly applied to things like headers or button labels.  
Center alignment on the horizontal plane isn’t particularly useful for large blocks of text (those that include more than three lines), as the varying starting point for each line can make reading more difficult.  
  
  
  
  
  
**EXERCISE #8**  
**Top alignment**  
##   
  
Top alignment means lining up the top edges of elements along an invisible horizontal axis. This style of vertical alignment is particularly useful when you're working with elements that vary greatly in height. By aligning items at the top, you provide a consistent starting point for users' eyes, which simplifies the scanning process and enhances comprehension.  
For instance, it's common in web navigation menus or multimedia blog posts. In a navigation menu, icons and text may differ in size but start from the same top line for easy scanning. Multimedia blog posts often feature a mix of text, images, and videos; aligning these at the top helps create a coherent flow. It helps in making the content more scan-friendly and easy to understand.  
  
  
  
  
  
**EXERCISE #9**  
**Bottom alignment**  
##   
  
Bottom-aligned elements sit flush against an invisible horizontal line, creating a grounded and anchored look. This type of alignment is especially effective when you're dealing with elements of varying heights and you want to establish a visual baseline.  
For instance, in a photo gallery, you might find image titles or photographer credits bottom-aligned to maintain uniformity, regardless of the dimensions of the photos.  
Similarly, in a website footer, the copyright information is often bottom-aligned to signify its less urgent but anchored presence. This method is useful for keeping a clean, organized aesthetic while allowing users to scan content with ease.  
  
  
  
  
  
**EXERCISE #10**  
**Dimensions**  
##   
  
Dimension refers to the size of each element. UI interfaces only deal with two-dimensional shapes with two dimensions (width and height). Three-dimensional shapes are a part of 3D design and can be measured in 3 dimensions (width, height, and depth). Defining dimensions upfront helps ensure consistency in a design.  
  
  
  
  
  
**EXERCISE #11**  
**Aspect ratio**  
##   
  
Aspect ratio is the proportion between the width and height dimensions of an element. This is particularly important with user-generated content, as people upload pictures of different sizes, and properly displaying them in a consistent way maintains visual harmony. Think of profile pictures on a social media site: they’re restricted to square or circular images, requiring users to resize or crop them.  
The most common aspect ratios for images are 16:9 and 4:3, although 1:1 square images have grown in popularity thanks to sites like Instagram.  
  
  
  
  
  
**EXERCISE #12**  
**Fixed layouts**  
##   
  
Fixed layouts use a wrapper and components with widths set in pixels. They are easier to implement and customize, but risky for modern products, where screen sizes and devices vary. They work best only in controlled environments, such as kiosks or digital signage, where hardware is fixed.  
**They often cause usability issues because:**  
* Users on smaller screens may need to scroll horizontally.  
* Users on larger screens may see large empty spaces on the sides.++[[2]](https://app.uxcel.com/#anchor-2)++  
  
  
  
  
  
**EXERCISE #13**  
**Fluid layouts**  
##   
  
Fluid or liquid layouts naturally shrink or stretch as the browser resizes. Regardless of whether the width is assigned or not, the layout fills up users' viewport no matter how big or small it is. At the same time, texts and images keep their size. This means that when the layout adjusts to fill the screen, only the containers stretch or shrink, not the contents inside them.  
With fluid layouts, users are more likely to see all available content without vertical or horizontal scrolling. Horizontal scrolling can only appear on the narrowest screens or on sites with large fixed-width content.  
**The best practices for creating fluid layouts include:**  
* Using percentage or relative units instead of pixels to adjust elements more flexibly  
* Setting minimum and maximum widths to prevent undesired layout changes  
* Using SVG images that scale smoothly without quality loss++[[3]](https://app.uxcel.com/#anchor-3)++  
