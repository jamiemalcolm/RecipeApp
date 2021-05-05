use recipe_data;

db.dropDatabase();



db.recipes.insertMany([
    {
        "name": "Mac and Cheese",
        "ingredients": [
            {
                "name": "Milk",
                "qty": "250ml"
            },
            {
                "name": "Cheese",
                "qty": "150g"
            },
            {
                "name": "Flour",
                "qty": "3 tbspn"
            },
            {
                "name": "Butter",
                "qty": "2 tbspn"
            },
            {
                "name": "Pasta",
                "qty": "150g"
            }
        ]
    },
    {
        "name": "Spag Bol",
        "ingredients": [
            {
                "name": "Pasta",
                "qty": "150g"
            },
            {
                "name": "Tinned Tomatoes",
                "qty": "1"
            },
            {
                "name": "Onion",
                "qty": "1"
            },
            {
                "name": "Pepper",
                "qty": "1"
            },
            {
                "name": "Mushrooms",
                "qty": "125g"
            },
            {
                "name": "Carrot",
                "qty": "1"
            },
            {
                "name": "Garlic",
                "qty": "2"
            },
            {
                "name": "Mixed Herbs",
                "qty": "1 tspn"
            },
            {
                "name": "Parmasan",
                "qty": "50g"
            }
        ]
    },
    {
        "name": "Pizza",
        "ingredients": [
            {
                "name": "Pizza",
                "qty": "1"
            }
        ]
    },
    {
        "name": "Home made Pizza",
        "ingredients": [
            {
                "name": "Pizza Dough",
                "qty": "1"
            },
            {
                "name": "Tinned Tomatoes",
                "qty": "1"
            },
            {
                "name": "Onion",
                "qty": "1"
            },
            {
                "name": "Pepper",
                "qty": "1"
            },
            {
                "name": "Chicken Breast",
                "qty": "1"
            },
            {
                "name": "Bacon",
                "qty": "4 Slices"
            },
            {
                "name": "Mushrooms",
                "qty": "125g"
            }
        ]
    },
    {
        "name": "Hot Dogs",
        "ingredients": [
            {
                "name": "Sausages",
                "qty": "6"
            },
            {
                "name": "Hot Dog Buns",
                "qty": "4"
            },
            {
                "name": "Ketchup",
                "qty": "4 tbspn"
            },
            {
                "name": "Mayo",
                "qty": "4 tbspn"
            },
            {
                "name": "Frozen Chips",
                "qty": "400g"
            }
        ]
    },
    {
        "name": "Shakshucka",
        "ingredients": [
            {
                "name": "Onion",
                "qty": "1"
            },
            {
                "name": "Pepper",
                "qty": "1"
            },
            {
                "name": "Tinned Tomatoes",
                "qty": "1"
            },
            {
                "name": "Garlic",
                "qty": "2"
            },
            {
                "name": "Mixed Herbs",
                "qty": "1 tspn"
            },
            {
                "name": "Cumin",
                "qty": "1 tspn"
            },
            {
                "name": "Corriander",
                "qty": "1 tspn"
            },
            {
                "name": "Paprika",
                "qty": "1 tspn"
            },
            {
                "name": "Spinnach",
                "qty": "100g"
            },
            {
                "name": "Eggs",
                "qty": "4"
            }
        ]
    }
])

// {
//     "name":"Mac and Cheese",
//     "ingredients": [
//         "Milk - 250ml",
//         "Cheese - 150g",
//         "Flour - 3 tbspn",
//         "Butter - 2 tbspn",
//         "Pasta - 150g"
//     ]
// },
// {
//     "name":"Spag Bol",
//     "ingredients":[
//         "Pasta - 150g",
//         "Tinned Tomatoes - 1",
//         "Onion - 1",
//         "Pepper - 1",
//         "Mushrooms - 125g",
//         "Carrot - 1",
//         "Garlic - 2",
//         "Mixed Herbs - 1 tspn",
//         "Parmasan - 50g"
//     ]
// },
// {
//     "name":"Pizza",
//     "ingredients":[
//         "Pizza - 1"
//     ]
// },
// {
//     "name":"Home made Pizza",
//     "ingredients": [
//         "Pizza Dough - 1",
//         "Tinned Tomatoes - 1",
//         "Onion - 1",
//         "Pepper - 1",
//         "Chicken Breast - 1",
//         "Bacon - 4 Slices",
//         "Mushrooms - 125g"
//     ]
// },
// {
//     "name":"Hot Dogs",
//     "ingredients": [
//         "Sausages - 6",
//         "Hot Dog Buns - 4",
//         "Ketchup - 4 tbspn",
//         "Mayo - 4 tbspn",
//         "Frozen Chips - 400g"
//     ]
// },
// {
//     "name":"Shakshucka",
//     "ingredients":[
//         "Onion - 1",
//         "Pepper - 1",
//         "Tinned Tomatoes - 1",
//         "Garlic - 2",
//         "Mixed Herbs - 1 tspn",
//         "Cumin - 1 tspn",
//         "Corriander - 1 tspn",
//         "Paprika - 1 tspn",
//         "Spinnach - 100g",
//         "Eggs - 4"
//     ]
// }

//
//-------------------------  new data Schema below -----------------------

// {
//     "name":"Mac and Cheese",
//     "ingredients": [
//         {"name":"Milk",
//         "qty":"250ml"},
//         {"name":"Cheese",
//         "qty":"150g"},
//         {"name":"Flour",
//         "qty":"3 tbspn"},
//         {"name":"Butter",
//         "qty":"2 tbspn"},
//         {"name":"Pasta",
//         "qty":"150g"}
//     ]
// },
// {
//     "name":"Spag Bol",
//     "ingredients":[
//         {"name":"Pasta",
//         "qty":"150g"},
//         {"name":"Tinned Tomatoes",
//         "qty":"1"},
//         {"name":"Onion",
//         "qty":"1"},
//         {"name":"Pepper",
//         "qty":"1"},
//         {"name":"Mushrooms",
//         "qty":"125g"},
//         {"name":"Carrot",
//         "qty":"1"},
//         {"name":"Garlic",
//         "qty":"2"},
//         {"name":"Mixed Herbs",
//         "qty":"1 tspn"},
//         {"name":"Parmasan",
//         "qty":"50g"}
//     ]
// },
// {
//     "name":"Pizza",
//     "ingredients":[
//         {"name":"Pizza",
//         "qty":"1"}
//     ]
// },
// {
//     "name":"Home made Pizza",
//     "ingredients": [
//         {"name":"Pizza Dough",
//         "qty":"1"},
//         {"name":"Tinned Tomatoes",
//         "qty":"1"},
//         {"name":"Onion",
//         "qty":"1"},
//         {"name":"Pepper",
//         "qty":"1"},
//        {"name":"Chicken Breast",
//        "qty":"1"},
//         {"name":"Bacon",
//         "qty":"4 Slices"},
//         {"name":"Mushrooms",
//         "qty":"125g"}
//     ]
// },
// {
//     "name":"Hot Dogs",
//     "ingredients": [
//         {"name":"Sausages",
//         "qty":"6"},
//         {"name":"Hot Dog Buns",
//         "qty":"4"},
//         {"name":"Ketchup",
//         "qty":"4 tbspn"},
//         {"name":"Mayo",
//         "qty":"4 tbspn"},
//         {"name":"Frozen Chips",
//         "qty":"400g"}
//     ]
// },
// {
//     "name":"Shakshucka",
//     "ingredients":[
//         {"name":"Onion",
//         "qty":"1"},
//         {"name":"Pepper",
//         "qty":"1"},
//         {"name":"Tinned Tomatoes",
//         "qty":"1"},
//         {"name":"Garlic",
//         "qty":"2"},
//         {"name":"Mixed Herbs",
//         "qty":"1 tspn"},
//         {"name":"Cumin",
//         "qty":"1 tspn"},
//         {"name":"Corriander",
//         "qty":"1 tspn"},
//         {"name":"Paprika",
//         "qty":"1 tspn"},
//         {"name":"Spinnach",
//         "qty":"100g"},
//         {"name":"Eggs",
//         "qty":"4"}
//     ]
// }
