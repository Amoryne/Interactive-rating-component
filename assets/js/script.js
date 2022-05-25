// Recupérer value button (1 à 5)


const btnSubmit = document.getElementById("submit");
let cote= document.querySelector('.note').value;

 btnSubmit.addEventListener("click", function(){
 console.log(cote);
});

