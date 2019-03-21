let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');

let section2 = document.getElementById('section2');


// let innerHeight = window.innerHeight;
// console.log("innerHeight = " + innerHeight);

let bodyScrollHeight = document.body.scrollHeight;
console.log("bodyScrollHeight = " + bodyScrollHeight);
let elementScrollHeight = document.documentElement.scrollHeight;
console.log("elementScrollHeight = " + elementScrollHeight);


console.log("\nWindow sizes and scrolling");
// Window sizes and scrolling
// Get the current scroll
let pageYOffset = window.pageYOffset;
console.log("pageYOffset = " + pageYOffset);


console.log("\nElement size and scrolling");
// Element size and scrolling
// let offsetParent = section2.offsetParent.id;
// console.log("offsetParent = " + offsetParent);

let offsetLeft = section2.offsetLeft;
console.log("offsetLeft = " + offsetLeft);

let offsetLeftChild = box2.offsetLeft;
console.log("offsetLeftChild = " + offsetLeftChild);

let offsetLeftChild2 = box3.offsetLeft;
console.log("offsetLeftChild2 = " + offsetLeftChild2);

let offsetTop = section2.offsetTop;
console.log("offsetTop = " + offsetTop);

let offsetTopChild = box2.offsetTop;
console.log("offsetTopChild = " + offsetTop);

let offsetTopChild2 = box3.offsetTop;
console.log("offsetTopChild2 = " + offsetTopChild2);


console.log("\nElement size");
// Element size
let offsetWidth = section2.offsetWidth;
console.log("section2 offsetWidth = " + offsetWidth);

let offsetHeight = section2.offsetHeight;
console.log("section2 offsetHeight = " + offsetHeight);


console.log("\nCoordinates");
console.log("Width/height of the document");
// Coordinates
let clientWidth = document.documentElement.clientWidth;
console.log("clientWidth = " + clientWidth);

let clientHeight = document.documentElement.clientHeight;
console.log("clientHeight = " + clientHeight);





console.log("\nWindow coordinates: getBoundingClientRect");
console.log("Window coordinates do not take the scrolled out part of the document into account, they are calculated from the window’s upper-left corner.");
console.log("If you scroll the page, the button position changes, and window coordinates as well.");
let topSection2 = section2.getBoundingClientRect().top;
let leftSection2 = section2.getBoundingClientRect().left;
let rightSection2  = section2.getBoundingClientRect().right;
let bottomSection2 = section2.getBoundingClientRect().bottom;

console.log("topSection2 = " + topSection2);
console.log("leftSection2 = " + leftSection2);
console.log("rightSection2 = " + rightSection2);
console.log("bottomSection2 " + bottomSection2);


console.log("\nDocument coordinates");
let clientY = section2.getBoundingClientRect().top;
let clientX = section2.getBoundingClientRect().left;

let pageY = clientY + pageYOffset;
let pageX = clientX + pageXOffset;


console.log("clientY = " + clientY);
console.log("clientX = " + clientX);
console.log("pageYOffset = " + pageYOffset);
console.log("pageXOffset = " + pageXOffset);

// When pageYOffset == pageY, display boxes.
console.log("pageY = " + pageY);
console.log("pageX = " + pageX);
