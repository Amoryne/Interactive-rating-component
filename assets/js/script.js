//LINK TO DOM


const btnSubmit = document.getElementById("submit");
let cote= document.querySelectorAll('.note');
let titleContainerDiv=document.getElementById('title-main');
let titleH1=document.getElementById('titleId');
let texte=document.querySelector('.texte');
let divButtons=document.querySelector('.note-container');
let divBtn=document.querySelector('.btn-container');
let image=document.querySelector('.img-header');
let divStar=document.querySelector('.star-container');
let coteChoose=document.querySelector('.coteYouChoose')
console.log(coteChoose);

//CREATE NEW HTML ELEMENTS-----------------------------------------------------


//ON CREER NEW ELEMENT TITRE

let newTitle = document.createElement('h1');
//ON LUI ATTRIBUE UN ID
newTitle.setAttribute("id", "new-title");
//ON LUI ASSIGNE DU CONTENU
newTitle.innerHTML = 'Thank you!';
//

//CREATE NEW ELEMENT P TEXTE//
let newTexte = document.createElement('p');
//ON LUI ATTRIBUE UNE CLASS
newTexte.setAttribute("class", "new-texte");
//ON LUI ASSIGNE DU CONTENU
newTexte.innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch";



//CREATE NEW IMAGE ELEMENT HEADER//
let newImg = document.createElement('img');
//ON LUI ATTRIBUE UNE CLASS
newImg.setAttribute("class", "new-image");
newImg.setAttribute("alt", "ceci est une image")
//ON LUI ASSIGNE DU CONTENU
newImg.src = '/assets/img/illustration-thank-you.svg';


//ON CREER NEW ELEMENT QUI AFFICHE LA NOTE CHOISIE
let newCoteChoose = document.createElement('p');
//ON LUI ATTRIBUE UNE CLASS
newCoteChoose.setAttribute("class", "new-choose");



//POUR CHAQUE COTE ON RECUPERE LE CHIFFRE
cote.forEach(button => {
    button.addEventListener("click", e =>{
        //ON STOCK LE CHIFFRE FOCUS DANS UNE VARIABLE MYCOTE
        let myCote=button.value;
        console.log(myCote);
        //ON ACTIVE LE BOUTON SUBMIT ET ON CHANGE LE DOM
        btnSubmit.addEventListener("click", event => {
            console.log(titleContainerDiv);
            //CHANGER TITRE
            titleH1.parentNode.replaceChild(newTitle, titleH1);
            //CHANGER TEXTE
            texte.parentNode.replaceChild(newTexte, texte);
            //SUPPRIMER LES BOUTTONS
            divButtons.remove();
            divBtn.remove();
            divStar.remove();
            //IMPORT NEW IMAGE HEADER
            image.appendChild(newImg)
            //AFFICHER NOTE CHOISIE SUR 5
            newCoteChoose.innerHTML = "You selected " + myCote + " out of 5";
            coteChoose.appendChild(newCoteChoose)
        })
})
})






//
// ─── NOTES ET TESTS ─────────────────────────────────────────────────────────────
//

    

//title.innerHTML = "You selected " + myCote + " out of 5";


//  btnSubmit.addEventListener("Click", e => {
//             console.log(e)  
//     })
//     console.log(btnSubmit)
// cote.forEach(button => {
//      button.addEventListener("click", e => {
//         console.log(e.target.value);
        
//ON LUI DONNE DU CONTENU ET ON L'ASSIGNE AU NOUVEL OBJECT
// let newTitleContent = document.createTextNode("bouya");
// newTitle.appendChild(newTitleContent);        
       
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