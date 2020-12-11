function changement(){
    let plante1=document.getElementById("aloe")
    let plante2=document.getElementById("ficus")
    let plante3=document.getElementById("ficus_king")

    if(plante1.classList.contains("show")){
        plante1.classList.add("hide")
        plante1.classList.remove("show")
        plante2.classList.add("show")
        plante2.classList.remove("hide")
        plante3.classList.add("hide")
        plante3.classList.remove("show")
        
    }else if(plante2.classList.contains("show")){
        plante1.classList.add("hide")
        plante1.classList.remove("show")
        plante2.classList.add("hide")
        plante2.classList.remove("show")
        plante3.classList.add("show")
        plante3.classList.remove("hide")
    }else{
        plante1.classList.add("show")
        plante1.classList.remove("hide")
        plante2.classList.add("hide")
        plante2.classList.remove("show")
        plante3.classList.add("hide")
        plante3.classList.remove("show")
    }
}

/*
let titre = document.getElementById("id_h1")
titre.classList.add("blue")

let titre = document.getElementById("id_h1")
titre.classList.remove("blue")

let titre = document.getElementById("id_h1")
titre.classList.toggle("blue")








  <div class="peru" id="peru"></div>
    <div class="turquoise" id="turquoise" ></div>
    <div class="yellow" id="yellow"></div>



# Cet exercice est le même que l’exercice précédent sauf qu’il faut
# Utiliser des images plutôt que des div
# Utiliser des classes CSS ( add, remove, toggle) plutot que de
manipuler directement le style dans le javascript*/