//********************************************************************************************
// Fonction scroller : Permet de faire défiler la page progressivement jusqu'à un élément.
//********************************************************************************************

function scroller(origine, cible, duree = 1000){
    var departElmt = $(origine);
    var arriveeElmt = $(cible);
    departElmt.click(function(){
    $('html, body').animate({
        scrollTop:arriveeElmt.offset().top
    }, duree);
    return false;});
}
