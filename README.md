# commerce-site-project

A mock commerce site made using React

\*\* Create a React E-commerce Application

-   Due on Friday 10th December \*\* Requirements:
-   2 pages:
-         Home Page
-             Grid of products
-             Carousel of featured products
-             https://www.w3schools.com/howto/howto_js_slideshow.asp
-         Product Page (with id parameter)
-             Similar to a product page on another site, allows you to add to cart and select product variants (think about size, color, …)
-         (All products should be stored in Firestore, you should store the following information:)
-             quantity
-             variants (could be Colors, sizes, etc)
-             price per unit
-             name
-             image url
-             favourited or not (boolean)
-         All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application (Store static data until FireStore Lesson)
-         Bonus:
-             Using Firestore and react create a cart system
-             Create a cart page in your react app
-             Add logic to prevent users from adding items to cart that are no longer in stock
-             You will have to check the current cart and the product quantity
-             Cart page should have the following:
-                 List of products in cart
-                 ability to change quantity of products in cart
-                 ability to remove entries from cart
