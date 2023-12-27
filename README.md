# Finalize the layout. Connect dynamic elements (see below)
Technical requirements for layout
You need to make a layout only for widescreen monitors with a screen width of 1200 pixels or more (i.e., the width of the content is fixed in pixels). The maximum width of the content container is 1160 pixels (except for the second block with squares).
The background image in the header should occupy the entire available width of the screen and not move when scrolling down (parallax effect).
Adaptive layout for different screen resolutions is NOT required.
Cards in the Breaking news section should be clickable links.
The Gallery of best images section is optional.
The layout should be made without using CSS libraries such as Bootstrap or Materialize.
Dynamic elements on the page:
The tabs in the Our services section should switch when you click on them. You can add any text and images for other tabs.
The Load more button in the Our amazing work section simulates downloading new images from the server. When you click it, 12 more images should appear in the section below (you can use any images). After that, the button disappears.
The buttons on the Our amazing work tab are "product filters". Beforehand, each of the images should be assigned to one of the four categories, at your discretion (on the layout, these are Graphic design, Web design, Landing pages, Wordpress).When you click on the category button, you should only show the images that belong to this category. All shows images from all categories. Categories can be renamed, and you can use any images you want.
The carousel on the What people say about theHam tab should be working, by clicking both on the photo icon at the bottom and on the right-left arrows. Both the picture and the text should change in the carousel. The carousel must have animation.
To connect dynamic elements, you can use any library - both jQuery/its plugins and pure Javascript code.
Tasks of increased complexity are optional:
The Load more button in the Our amazing work section can be clicked twice, and each click adds 12 images below. That is, there can be a maximum of 36 images in this section. After the second click, the button disappears.
You should also format the Gallery of best images section, arrange the images inside the block using the Masonry plugin.
The Load more button in the Gallery of best images section should also be working and add a portion of new images to the page.
When you click on each of the Load more buttons, simulate the loading of images from the server. Instead of the button or above it, show a two-second CSS loading animation (you can write it yourself or take any example from the Internet, for example, here or here), and only after that add images to the page.
