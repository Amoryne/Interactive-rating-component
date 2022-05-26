// Recupérer value button (1 à 5)


const btnSubmit = document.getElementById("submit");
let cote= document.querySelectorAll('.note');
let titleContainerDiv=document.getElementById('title-main');
let titleH1=document.getElementById('titleId')
console.log(titleH1);
let divButton=document.getElementsByClassName('note-container');


//CREATE NEW HTML ELEMENTS/////////////

//TITLE --> THANK YOU   //

//ON CREER NEW ELEMENT TITRE

let newTitle = document.createElement('h1');
//ON LUI ATTRIBUE UN ID
newTitle.setAttribute("id", "new-title");
//ON LUI DONNE DU CONTENU ET ON L'ASSIGNE AU NOUVEL OBJECT
// let newTitleContent = document.createTextNode("bouya");
// newTitle.appendChild(newTitleContent);
newTitle.innerHTML = 'BOUYA';
//







//POUR CHAQUE COTE ON RECUPERE LE CHIFFRE
cote.forEach(button => {
    button.addEventListener("click", e =>{
        //ON STOCK LE CHIFFRE FOCUS DANS UNE VARIABLE MYCOTE
        let myCote=button.value;
        console.log(myCote);
        //ON ACTIVE LE BOUTON SUBMIT ET ON CHANGE LE DOM
        btnSubmit.addEventListener("click", event => {
            console.log(titleContainerDiv);
            titleH1.parentNode.replaceChild(newTitle, titleH1);
           





        })
       
})
})






///////////////////////////////////////////////////////////////////////

//title.innerHTML = "You selected " + myCote + " out of 5";


//  btnSubmit.addEventListener("Click", e => {
//             console.log(e)  
//     })
//     console.log(btnSubmit)
// cote.forEach(button => {
//      button.addEventListener("click", e => {
//         console.log(e.target.value);
        
        
       
// });

// });

// function modifyText(newText) {
//     const t2 = document.querySelector("#t2");
//     t2.firstChild.nodeValue = newText;
//   }

// First, select the DOM element that you want to replace.
// Then, create a new element.
// Finally, select the parent element of the target element and 
// replace the target element by the new element using the replaceChild() method.