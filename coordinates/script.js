let box = document.querySelector(".box"),
    button = document.querySelectorAll("button"),

    width = box.clientWidth,
    height = box.clientHeight; //here can be different properties (look image)

console.log(box.getBoundingClientRect()); //.left .right ...
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop );

button[0].addEventListener("click", function(){
    box.style.height = box.scrollHeight + "px";
});

button[1].addEventListener("click", function(){
    box.scrollTop = 0; 
});

/*
    scrollBy(0, 200); scrolling down
    scrollTop(0, 200); bring to the arg xy
*/
