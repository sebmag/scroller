# scroller.js

Fonction de scrolling Javascript (nécéssite JQuery). Cette petite fonction très pratique permet de faire défiler l'écran vers une cible définie lors d'un clic sur un élément choisi. Possibilité de spécifier la durée de l'animation en millisecondes.

## Utilisation

    scroller('#origin', '#cible', 2000);

Le premier paramètre (#origin) correspond au nom d'un ID, d'une classe ou d'une balise HTML. Il permet de spécifier l'élément du DOM qui déclenchera l'évènement lors d'un clic souris. Ce paramètre est obligatoire.

Le second paramètre (#cible) correspond à la cible vers laquelle le défilement de la page aura lieu. Si aucun paramètre n'est spécifié, l'élément *body* est désigné par défaut.

Le dernier paramètre (2000) correspond à la durée de l'animation en millisecondes. Si ce paramètre n'est pas spécifié, la valeur de la durée de l'animation est égale à 1000 par défaut.

### Exemples

    scroller('#origin'); // Fait défiler jusqu'à l'élément body pendant 1 seconde.
    scroller('#origin', '', 1200); // Fait défiler jusqu'à l'élément body pendant 1,2 seconde.

Attention à ne pas mettre d'espace entre les guillemets si vous spécifiez une durée et laissez le second paramètre vide !