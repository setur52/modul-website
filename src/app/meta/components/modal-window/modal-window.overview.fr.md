## Utilisation
Une fenêtre de dialogue initie toujours un dialogue avec l'utilisateur, suite à une action posée dans l'interface. Par exemple pour poser une question, demander la confirmation d'une opération, avertir d'une erreur ou encore pour proposer de nouvelles actions à l'utilisateur. De plus, elle est modale, c'est-à-dire que l'utilisateur ne peut continuer à travailler tant qu'il n'a pas accusé réception du message à l'aide des boutons ou du lien de fermeture s'il est disponible.

Pour tous les autres cas où il faut afficher du contenu tout en gardant l'utilisateur en contexte de la page, il faut utiliser le composant fenêtre secondaire.

---
## Caractéristiques
### Contenu
Une fenêtre de dialogue doit au minimum contenir un énoncé principal (sous forme de texte régulier ou à l'aide du composant message) et au moins un bouton. Il est également possible de faire afficher un message supplémentaire (information ou avertissement) à l'aide du composant, une zone de conseils et un lien permettant de fermer la fenêtre. Le message supplémentaire et la zone de conseils doivent se trouver sous l'énoncé principal.

Puisque plusieurs cas d'utilisation sont possibles, voici quelques principes de présentation de contenu à respecter:
* Lorsque la situation ayant déclenché l'affichage de la fenêtre de dialogue a une conséquence directe sur le cheminement de l'étudiant, sa réussite, son dossier financier, etc. il est important d'utiliser le composant message d'avertissement pour afficher l'énoncé principal
* Afin de permettre à l'utilisateur de se concentrer sur une tâche à la fois, il est important d'essayer de véhiculer un seul message par fenêtre. Par exemple, en évitant d'utiliser une zone de message (information ou avertissement) et une zone de conseils en même temps
* Idéalement, utiliser des noms de boutons représentant l'action qui sera effectuée, plutôt que des libellés génériques tels que OK, Oui, Non, etc.
* Lorsqu'un seul bouton est disponible et qu'il n'y a pas de lien de fermeture, il est permis d'utiliser le libellé OK s'il n'y a pas d'alternative préférable

### Défilement
Le contenu d'une fenêtre de dialogue doit toujours être complètement visible dans la fenêtre d'affichage (viewport). Il ne doit donc pas être possible de défiler.

### Fermeture
Une fenêtre de dialogue ne contient jamais de bouton de fermeture (X en haut à gauche), puisque idéalement l'utilisateur doit prendre action. Il est néanmoins permis d'utiliser un lien Fermer centré sous les boutons, permettant de fermer la fenêtre lorsque les actions proposées sont facultatives. Toutefois, lorsqu'un bouton Annuler est présent, il est fortement déconseillé d'utiliser le lien de fermeture, puisque ces options sont mutuellement exclusives.