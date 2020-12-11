
//creation H1 dans la DIV
let parent = document.getElementById("ma_div")
let new_titre = document.createElement("h1");
new_titre.innerText = "Nouveau titre"
parent.appendChild(new_titre)

//creation P dans la DIV
parent = document.getElementById("ma_div")
let new_texte = document.createElement("p");
new_texte.innerText = "NEW TEXT NEW TEXT NEW TEXT NEW TEXT"
parent.appendChild(new_texte)

//suppression des textes
function goodbye(texteId){
    let bodyBody = document.getElementById("body1")
    let ghostText = document.getElementById(texteId)
    bodyBody.removeChild(ghostText)
}

//creation H1
bodyBody = document.getElementById("body1")
let new_titreH1 = document.createElement("h1");
new_titreH1.innerText = "Nouveau titre H1"
parent.appendChild(new_titreH1)

//Inserer H1 en premier
bodyBody.insertBefore(new_titreH1,bodyBody.firstChild)

//modification du H1 --> H2
bodyBody = document.getElementById("body1")
let new_titreH2 = document.createElement("h2")
new_titreH2.innerText = "Nouveau titre H2"
bodyBody.replaceChild(new_titreH2,bodyBody.firstChild)

/*

     # HTML :
    # Nom du fichier : exercice39.html
    # Ajouter 4 paragraphes
    # Quand on clique sur un des 4 paragraphes il se supprime 

    # En js
# remplacez le titre h1 par un titre h2 (cad création d’un nouvel element
h2 puis replacement )

*/