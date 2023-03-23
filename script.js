/* le nombre de poussières d'étoiles varie en fonction de  : 
  -> des clicks de l'utilisateur 
  -> des clicks par seconde
*/

/* click par seconde -> Chaque seconde le nombre de poussières d'étoiles s'incrémente tout seul 
( au départ on peut définir que 1 seconde vaut 5 poussières d'étoiles (par exemple) et ensuite les booster vont fiaire changer cette valeur)
*/

/*BOOSTER  :

-> Augmenter le nombre de poussière d'étoiles par click de l'utilisateur (Ex : 1 click vaut 10 poussières d'étoiles)

-> Augmenter le nombre de poussière d'étoiles par seconde ( Ex : 1 secondes 10 poussières générées)

*/

/*

MENU 

Faire apparaître les différents onglets

TROPHY 

-> Niveau de poussière atteint -> déblocage d'une nouvelle planète ( Ex : 500000 poussières déblocage de Mars )

JAUGE 

-> Pourcentage de progression du niveau de poussière requise pour le prochain trophy */
const boutique = document.querySelector('.shop-object');
const trophé = document.querySelector('.trophy-container');

const pitié = document.querySelector('.menuShop');
const stp = document.querySelector('.menuTrophy');

pitié.addEventListener('click', function(){
  boutique.style.display = flex;
  trophé.style.display = none;
});

stp.addEventListener('click', function(){
  boutique.style.display = none;
  trophé.style.display = flex;
});