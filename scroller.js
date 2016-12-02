//********************************************************************************************
// Fonction scroller : Permet de faire défiler la page progressivement jusqu'à un élément.
//********************************************************************************************

function scroller(origine, cible, duree){
    
    if(duree === 'undefined') {
        duree = 1000;
    }
    if(cible === 'undefined') {
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
