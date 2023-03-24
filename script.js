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
const shopObject = document.querySelector('.shop-object');
const trophyContainer = document.querySelector('.trophy-container');

const menuShop = document.querySelector('.menuShop');
const menuTrophy = document.querySelector('.menuTrophy');

menuShop.addEventListener('click', function(){
  shopObject.style.display = flex;
  shopContainer.style.display = none;
});

menuTrophy.addEventListener('click', function(){
  shopObject.style.display = none;
  menuContainer.style.display = flex;
});