const myRating = document.querySelectorAll(".ratings");
const submitBtn = document.querySelector(".btn");
const displayMyRate = document.querySelector("#ratings__here");
const displayThanks = document.querySelector(".inner__container2");
const mainDisplay = document.querySelector(".inner__container1");



window.addEventListener('load', function(){
    displayThanks.classList.add("hide");

})
let value;
myRating.forEach((rating) => {
    rating.addEventListener('click', (e) => {
        myRating.forEach((rating) => {
            rating.classList.remove("focus")
        });
        
        e.target.classList.add("focus");
        // if(e = "") {
            
        // }
        value = e.target.textContent;
    });
});

submitBtn.addEventListener('click', function(){
    mainDisplay.classList.add("hide");
    displayMyRate.textContent = value;
    displayThanks.classList.remove("hide");
    
    console.log("yay.....");
})

// for (let i = 0; i < myRating.length; i++){
//     myRating[i].addEventListener('click', function(){
//         let rate = myRating[i].textContent;
//         for (let i = 0; i < myRating.length; i++){
//             myRating.classList.contains("focus");
//             myRating.classList.remove("focus");
//             console.log("yesss.....");
//         }
//         myRating.classList.add("focus");
        

//         submitBtn.addEventListener('click', function(){
//             mainDisplay.classList.add("hide");
//             displayMyRate.textContent = rate;
//             displayThanks.classList.remove("hide");
            
//             console.log("yay.....");
//         })
    
//     })
// }

