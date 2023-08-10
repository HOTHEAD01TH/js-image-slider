/* The showSlide function is responsible for showing the slide at the specified index.
 The nextSlide and previousSlide functions update the changeSlide variable and call showSlide accordingly.*/
let slides = Array.from(document.querySelectorAll(".slide"));
let changeSlide = 0;

function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("show"));
    slides[index].classList.add("show");
}

function nextSlide() {
    changeSlide = (changeSlide + 1) % slides.length;
    showSlide(changeSlide);
}

function previousSlide() {
    changeSlide = (changeSlide - 1 + slides.length) % slides.length;
    showSlide(changeSlide);
}

document.querySelector("#next").addEventListener("click", nextSlide);
document.querySelector("#prev").addEventListener("click", previousSlide);


/*1. `let slides = Array.from(document.querySelectorAll(".slide"));`
- This line selects all elements with the class name "slide" using the `querySelectorAll` method. It returns a NodeList, which is converted to an array using `Array.from()`. The array is stored in the `slides` variable.

2. `let changeSlide = 0;`
- This line initializes the variable `changeSlide` to 0. It will keep track of the current slide index.

3. `function showSlide(index) { ... }`
- This is a function called `showSlide` that takes an index as a parameter. It will show the slide at the specified index while hiding the rest.

4. `slides.forEach((slide) => slide.classList.remove("show"));`
- This line uses the `forEach` method to iterate over each slide in the `slides` array. It removes the "show" class from each slide, effectively hiding them.

5. `slides[index].classList.add("show");`
- This line adds the "show" class to the slide at the specified index, making it visible.

6. `function nextSlide() { ... }`
- This is a function called `nextSlide` that advances to the next slide.

7. `changeSlide = (changeSlide + 1) % slides.length;`
- This line increments `changeSlide` by 1 and wraps it around to 0 when it reaches the maximum slide index. This ensures that the slideshow loops back to the beginning when reaching the end.

8. `showSlide(changeSlide);`
- This line calls the `showSlide` function, passing in the updated `changeSlide` value. It displays the slide corresponding to the new index.

9. `function previousSlide() { ... }`
- This is a function called `previousSlide` that goes back to the previous slide.

10. `changeSlide = (changeSlide - 1 + slides.length) % slides.length;`
 - This line decrements `changeSlide` by 1 and wraps it around to the maximum slide index when it goes below 0. This allows the slideshow to loop from the first slide to the last.

11. `showSlide(changeSlide);`
 - This line calls the `showSlide` function, passing in the updated `changeSlide` value. It displays the slide corresponding to the new index.

12. `document.querySelector("#next").addEventListener("click", nextSlide);`
 - This line selects the element with the ID "next" using `querySelector`. It adds an event listener to the element so that when it is clicked, the `nextSlide` function is called.

13. `document.querySelector("#prev").addEventListener("click", previousSlide);`
 - This line selects the element with the ID "prev" using `querySelector`. It adds an event listener to the element so that when it is clicked, the `previousSlide` function is called.

In summary, this code sets up a basic slideshow functionality. It selects all slides, hides them initially, and provides functions to show the next and previous slides. The slideshow is controlled by clicking on elements with the IDs "next" and "prev".*/
