const colors=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn= document.getElementById('btn-clr');
const color = document.querySelector('.color');


btn.addEventListener('click', function() {

    /*  This for loop is used for generating six digit number for color every iteration generate 1 number and then concatinate to the hexColor variable */
   let hexColor = "#";
   for(let i = 0; i<6; i++){
       hexColor += colors[getRandomNumber()];
   }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});


/* This function is used for generating the random Number */
function getRandomNumber(){
return Math.floor(Math.random() * colors.length);
}
