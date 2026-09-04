# Solution - MCD et MLD

[← Retour au chapitre principal](README.md) · [⌂ Menu principal](../../../../README.md)

---

## Introduction

A cette étape du projet, nous cherchons à modéliser les pizzas présentes sur la carte des mets proposée par le Foodtruck.

## Modèle conceptuel de données

```mermaid
erDiagram
    PIZZAS }|--o{ INGREDIENTS : contient

    PIZZAS {
        text name "Identifiant naturel"
        text image "Optionnel"
        number price
    }

    INGREDIENTS {
        text name "Identifiant naturel"
        number price
    }
```

<script type="module" src="../../../../assets/js/mermaid-loader.js"></script>

### Explications complémentaires

| Valeur | Explications |
| --- | --- |
| `name` | Identifiant naturel. |
| _italique_ | Attribut optionnel. |
| `Pizzas (1, N)` | Chaque ingrédient est présent sur une ou plusieurs pizzas. |
| `Ingrédients (0, N)` | Une pizza peut n'avoir aucun ou avoir plusieurs ingrédients. La pizza de base est une Margherita avec de la sauce tomate et de la mozzarella. |

## Modèle logique de données

![Modèle logique de données des pizzas et des ingrédients](<../../../../assets/images/image (12).png>)

### Explications complémentaires

* L'association N à N est bien devenue une relation N à N via une table intermédiaire.
* Les contraintes d'unicité sont cohérentes avec le MCD.
* Les types sont plus techniques, sans être en lien direct avec Node.js.
* Les associations sont bien devenues des tables.

---

[← Retour au chapitre principal](README.md) · [⌂ Menu principal](../../../../README.md)
