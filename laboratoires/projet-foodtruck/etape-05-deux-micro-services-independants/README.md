# Étape 05 - Deux microservices indépendants

[← Retour au chapitre principal](../../../README.md#laboratoires) · [⌂ Menu principal](../../../README.md)

---

## Intention

Afin de pouvoir exécuter nos API sur des nœuds différents, nous devons modifier la structure du projet actuel.

Les modifications à apporter sont les suivantes:

* [ ] Séparation des ressources pour disposer d'une base de données ainsi qu'un serveur web dédié.
* [ ] Suppression de toutes les références qui ne sont pas essentielles à la ressource (on retire toute la logique « ingrédients » de la ressource « pizzas »).
* [ ] Ajout d'une table `product_compositions` pour faire le lien entre « ingrédients » et « pizzas ».
* [ ] Intégration d'un service « pizzas » pour gérer la composition des pizzas et communiquer avec le microservice « ingrédients ».

### Le code

[Consulter le code de départ sur GitHub](https://github.com/CPNV-I321-ProgDist/express-api-starter/tree/develop).

---

[← Retour au chapitre principal](../../../README.md#laboratoires) · [⌂ Menu principal](../../../README.md)
