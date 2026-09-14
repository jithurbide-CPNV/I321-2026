---
published: false
---

# Solution

## Diagramme de classes

![Diagramme de classes des pizzas et ingrédients](<../../../../assets/images/diagram-16493888247746822365.png>)

## Modèle logique de données

![Modèle logique de données des pizzas et ingrédients](<../../../../assets/images/image (3).png>)

## Séquence de création d'une pizza

![Séquence de création d’une pizza](<../../../../assets/images/image (4).png>)

Comment créer une pizza

```json
{
  "name": "Margherita",
  "price": 8.5,
  "ingredientIds": [1, 2, 3]
}
```

Comment récupérer une pizza

```json
{
  "id": 1,
  "name": "Margherita",
  "price": 8.5,
  "ingredients": [
    { "id": 1, "name": "tomato" },
    { "id": 2, "name": "mozzarella" },
    { "id": 3, "name": "basil" }
  ]
}
```

Lien avec la base de données

![Lien avec la base de données](<../../../../assets/images/image (1).png>)
