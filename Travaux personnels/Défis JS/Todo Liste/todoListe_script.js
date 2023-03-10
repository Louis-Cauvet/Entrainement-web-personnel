"use strict";

initialiserAffichage();

// localStorage.clear();
// localStorage.setItem(0,1);

function initialiserAffichage(){
    let tailleStorage = localStorage.length;
    for(let i = 1; i<tailleStorage; i++){
        let indice = localStorage.key(i);
        afficherTache(indice);
    }
}

function afficherTache(indiceTache){
    // création de la balise <div> qui correspond à la nouvelle tâche
    const nvTache = document.createElement('div');
    nvTache.className = "tache";
    let liste = document.getElementById("listeTaches");
    liste.append(nvTache);

    // création de la balise <li> qui correspond au texte de la nouvelle tâche
    let t = localStorage.getItem(indiceTache);
    const texteNvTache = document.createElement('li');
    texteNvTache.textContent = t;
    nvTache.append(texteNvTache);

    // création de la balise <button> qui correspond au bouton de la nouvelle tâche 
    const boutonNvTache = document.createElement('button');
    boutonNvTache.className = "supprimer";
    // on ajoute un évènement à chaque bouton de suppression, qui s'active que lorsque le bouton est cliqué
    boutonNvTache.addEventListener("click", () => {
        supprimerTache(boutonNvTache, indiceTache);
    });
    nvTache.append(boutonNvTache);

    // création de la balise <img> qui correspond à l'image du bouton de la nouvelle tâche 
    const imageSuppNvTache = document.createElement('img');
    imageSuppNvTache.className = "iconePoubelle";
    imageSuppNvTache.src = "iconePoubelle_blanc.png";
    imageSuppNvTache.alt = "icone de suppression";
    boutonNvTache.append(imageSuppNvTache);
}

function ajouterTache(){
    let saisie = document.getElementById("champSaisie").value;
    if(saisie <1){
        window.alert("Il faut saisir au moins un caractère dans le champ !")
    } else {
        let indiceProchain = localStorage.getItem(0);
        let indiceProchainNombre = parseInt(indiceProchain);
        localStorage.setItem(indiceProchainNombre, saisie);
        afficherTache(indiceProchainNombre);

        indiceProchainNombre = indiceProchainNombre+1;
        localStorage.setItem(0,indiceProchainNombre);

        // on libère la zone d'écriture pour la prochaine tâche
        document.getElementById("champSaisie").value ="";
    }
}

function supprimerTache(bouton, indice){
    let baliseTacheSupp = bouton.parentNode;
    let listeT = document.getElementById("listeTaches");
    listeT.removeChild(baliseTacheSupp);

    // let tacheDansStorage = localStorage.getItem(indice);
    console.log("on supprime la tâche "+indice);
    localStorage.removeItem(indice);
}