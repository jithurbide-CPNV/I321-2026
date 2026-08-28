# Solution

[← Retour au chapitre principal](README.md) · [⌂ Menu principal](../../../README.md)

---

Voici la structure qui a été discutée en classe et sur laquelle vous pouvez vous baser pour la suite du module.

Cette structure a été produite par essai successif.

## Générateur Express

Source

Le générateur de squelette mis à disposition par Express a été exploité. Cela a permis de rapidement valider la bonne configuration de notre outils, en particuliers npm et node.

```bash
npm install -g express-generator
```

> **Attention**
>
> La commande standard génère un squelette qui n'est pas spécifique pour une API, mais à une application complète avec une structure MVC contenant des vues.

#### Première correction

* Voici la commande mise à jour afin de ne pas inclure de vue dans le squelette:

```bash
express --no-view my-api
```

> **Attention**
>
> La structure est intéressante mais ne répond que très partiellement aux critères à respecter. L'effort de correction est d'ajout est trop important.

## Utilisation des outils intégrés à l'IDE

[Source Jetbrains](https://www.jetbrains.com/help/webstorm/developing-node-js-applications.html)

On remarque en lisant la documentation que c'est bien le même générateur de squelette qui est utilisé par JetBrains.

![Configuration d'un projet Express dans WebStorm](<../../../assets/images/image (31).png>)

*Capture de l'IDE WebStorm montrant l'utilisation du générateur Express.*

> **Attention**
>
> On y apprend également que WebStrom nous permet de configurer soit un interpréteur node global (pour tous nos projets) ou alors une version projet.

La configuration est amplement simplifiée et même si le code n'a pas la qualité requise, j'ai bien utilisé l'IDE pour arriver à un premier résultat.

## ChatGPT

Un outil puissant pour parvenir à nos fins est ChatGPT. Mais attention, nous allons devoir nous y reprendre à plusieurs fois pour construire cette structure qui répond à tous les critères à suivre:

```json
MyAPI
│   .env                                //externalisation des variables d'environnements
│   .gitignore                          //exclusion des fichiers et répertoires
│   app.js                              //point d entrée de notre API
│   package-lock.json
│   package.json                        //configuration des dépendances (npm)
│   README.md
│   server.js                           //fichier initiale pour lancer serveur (écoute)
│   
├───.idea
│       .gitignore
│       jsLibraryMappings.xml
│       modules.xml
│       untitled.iml
│       vcs.xml
│       workspace.xml
│       
├───controllers                         //couche logique permettant le lien entre les requêtes et la logique métier
│       users.js                        //chaque ressources disposera de sa propre logique métier
│       
├───docs                                //répertoire contenant la documentation technique
│       IDESetup.md
│       ProjectSetup.md
│       
├───middleware                          //intégration de librairies, comme la gestion d'exceptions
│       errorHandler.js
└───routes                             //couche logique permettant le routage des requêtes
        users.js                       //chaque ressource disposera de son propre routage
```

Voici le prompt initial utilisé pour arriver à ce résultat:

> “Could you help me find the correct command to create a new Express project designed to be an API (without view rendering)? I tried using express-generator, but I wasn’t successful.”

> **Attention**
>
> Tentez l'expérience de votre côté et regarder la différence avec la version proposée ici. Autrement dit, on est loin du résultat, mais l'IA nous donne un bon coup de main pour la structure initiale.

---

[← Retour au chapitre principal](README.md) · [⌂ Menu principal](../../../README.md)
