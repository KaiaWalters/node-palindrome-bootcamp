# Is That a Palindrome? 
A simple palindrome checker that allows the user to input a word and then checks if that word is a paindrome. 

**Link to project:** http://recruiters-love-seeing-live-demos.com/

![alt tag](https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjdqOzJ2snjAhWEv1kKHc53AAkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2F31707807%40N05%2F2969259694&psig=AOvVaw0uSn30Vj-tKW4CVhwXrABB&ust=1563925479229132)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, and Node.js

A majority of the application is built with javascrit. The user types a word into the input element on the page which is then parsed for it's value. The input (which is a string) is then manipulated into an array using .string("") method and then reversed using .reverse(), and finally turned back into a string using .join(""). Many of these string maniplations take place on the server side of the application and the result is fetched in a client side Javascript file and served in the Dom. 

## Optimizations

Initially the application's' functionality came entirely froma client side javascript file. Later, I transfered much of the javascript into an api on the server end. The user input was partially manipulated on the client .js and while the rest of the work was sent to the server in the form of a query. Optimizing the project with Node.js and the server side now opens the door to many other cool functions such as saving submitted palindromes to create a palindrome library made by users of the app.

## Lessons Learned:
What I learned from this project was show to effectvely create and use an api to send queries, fetch responses, and launch a server all in a local host. This was very exciting since I will soon be working with them in larger projects. 

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Complex Nasa API:** https://github.com/KaiaWalters/complex-nasa-bootcamp

**Weather API:** https://github.com/KaiaWalters/Weather-API

**Chuck Norris Fact Generator:** https://github.com/KaiaWalters/Chuck-Norris-Fact-Generator



