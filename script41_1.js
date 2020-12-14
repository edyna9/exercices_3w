
//Afficher toutes les elements du tableau dans la console

let divs = document.getElementsByTagName("div");
console.log("Il y a" +" "+divs.length+" "+ "divs dans le script qui contiennent Lorem")

for(let i=0; i<divs.length; i++){
    let cellule= divs[i];
    console.log(cellule.innerText)
}

//Afficher toutes les elements du tableau dans la console apartenant à la classe b_yellow
let divs2= document.getElementsByClassName("b_yellow")
console.log("Il y a" +" "+divs2.length+" "+ "divs dans le script qui contiennent class b_yellow")

for (let i=0; i<divs2.length; i++){
    let cellule= divs[i];
    console.log(cellule.innerText)
}

//Afficher le contenu de l'element identifié par la selection #container .b_yellow lorem A
let selection=document.querySelector("#container .b_yellow")
console.log ("Voici le contenu du selecteur #container .b_yellow" +" "+ selection.innerText)

//Afficher le contenu de l'element identifié par la selection #container .b_yellow

let selection2= document.querySelectorAll("#container .b_yellow")

for(let i=0; i<selection2.length; i++){
    let cellule= selection2[i];
    console.log("Il y a 2 balises qui ont une classe b_yellow, voici leur contenu" +" "+cellule.innerText)
}