
function nombre(){
    number=prompt("Entrez un nombre entre 10 et 20");
    if(number<10){
        alert("Nombre trop petit");
    }else if(number>20){
        alert("Nombre trop grand");
    }else{
        alert("Nombre convenable!");
    }

 }
 nombre();




/*

var monage = 27;
if(age<monage){
    alert("Je suis plus grand")
}else if(age==monage){
    alert("vous avez le même âges")
}else{
    alert("vous êtes plus grand")
}


# Ecrire un script qui demande un nombre compris entre 10 et 20,
jusqu’à ce que la réponse convienne.
# En cas de réponse supérieure à 20, on fera apparaître un
message : « Plus petit ! »,
# et inversement, « Plus grand ! » si le nombre est inférieur à 10.
 */
