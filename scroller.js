//********************************************************************************************
// Fonction scroller : Permet de faire défiler la page progressivement jusqu'à un élément.
//********************************************************************************************

function scroller(origine, cible, duree){
    
    if(undefined === duree) {
        duree = 1000;
    }
    
    if((undefined === cible) || (cible === '')) {
        cible = 'body';
    }
    
    var origineElmt = $(origine);
    var cibleElmt = $(cible);
    
    origineElmt.click(function(){
    $('html, body').animate({ 
    scrollTop:cibleElmt.offset().top 
    }, duree);
    
    return false;});
}
