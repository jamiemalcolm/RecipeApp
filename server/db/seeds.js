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
                "qty": "150g Grated"
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
                "name": "Mustard",
                "qty": "2 tspn"
            },
            {
                "name": "Pasta",
                "qty": "150g"
            }
        ],
        "steps":[
            "Step 1. In a saucepan bring water with some salt to the boil, add the pasta and cook for 10-12 minutes, stirring occasionally or until aldente.  Set oven to 180 degrees celsius",
            "Step 2. Heat the milk in the microwave.  Melt the butter in a saucepan untill bubbling, then add flour and beat into a paste, continuously stir and cook for 5-6 minutes on a low to medium heat ensuring not to burn the paste this is called a Roux.",
            "Step 3. Add the milk to the roux gradually, stirring as you go, until you get a smooth sauce. Cook for 5-10 mins, stirring continuously, until the sauce has thickened. Add Cheese and Mustard to taste.",
            "Step 4. Drain the pasta and add to the sauce, mixing well.  Transfere to an oven proof dish and sprinkle some extra grated cheese on top.  Cook for 8-10 minutes or until golden brown on top.",
            "Step 5. Serve in warmed bowls and enjoy!"
        ]
    },
    {
        "name": "Spaghetti Bolognese",
        "ingredients": [
            {
                "name": "Spaghetti",
                "qty": "150g"
            },
            {
                "name": "Tinned Tomatoes",
                "qty": "1"
            },
            {
                "name": "Diced Onion",
                "qty": "1"
            },
            {
                "name": "Diced Carrot",
                "qty": "1"
            },
            {
                "name": "Sliced Mushrooms",
                "qty": "125g"
            },
            {
                "name": "Diced Red Pepper",
                "qty": "1"
            },
            {
                "name": "Minced Garlic",
                "qty": "2"
            },
            {
                "name": "Mixed Herbs",
                "qty": "1 tspn"
            },
            {
                "name": "Red Wine",
                "qty": "75ml"
            },
            {
                "name":"Beef Stock Cube",
                "qty": 1
            },
            {
                "name": "Parmasan",
                "qty": "50g"
            }
        ],
        "steps":[
            "Step 1. Put a large saucepan on a medium heat and add 1 tbsp olive oil.",
            "Step 2. Add the Onion, Carrot, Pepper, Mushrooms and Garlic and fry for 10 minutes, lowering the heat add the mixed herbs.",
            "Step 3. Pour in the wine and reduce.  Add the Chopped Tomatoes and Beef Stock and reduce the sauce.",
            "Step 4. Place a large medium saucepan of water on to boil adding salt and some oil.",
            "Step 5. Cook the pasta in boiling water until aldente (about 12 minutes)",
            "Step 6. Drain the pasta and return to the pot with a very small amount of water still in it.",
            "Step 7. Add the Sauce to the pasta and mix well",
            "Step 8. Serve in warmed bowls, grate the Parmasan over the top and enjoy!"
        ]
    },
    {
        "name": "Pizza",
        "ingredients": [
            {
                "name": "Pizza",
                "qty": "1"
            }
        ],
        "steps":[
            "Step 1. Follow Packet instructions",
            "Step 2. Enjoy your night off!"
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
                "name":"Minced Garlic",
                "qty":"1"
            },
            {
                "name": "Mixed Herbs",
                "qty": "1 tspn"
            },
            {
                "name": "Tinned Tomatoes",
                "qty": "1"
            },
            {
                "name": "Sliced Red Onion",
                "qty": "0.5"
            },
            {
                "name": "Diced Red Onion",
                "qty": "0.5"
            },
            {
                "name": "Sliced Red Pepper",
                "qty": "1"
            },
            {
                "name": "Chicken Breast, Cooked and sliced",
                "qty": "1"
            },
            {
                "name": "Bacon, Cooked and Sliced ",
                "qty": "4 Slices"
            },
            {
                "name": "Mushrooms, Sliced",
                "qty": "125g"
            },
            {
                "name": "Cheese, Grated",
                "qty":"75g"
            }
        ],
        "steps":[
            "Step 1. Set oven to 180 degrees celsius. In a saucepan fry the Diced Onion until soft and translucent, add the Garlic, Chopped tomatoes and mixed herbs along with some salt and pepper.  Lower the heat and Reduce.",
            "Step 2. With a stick blender or food processor, blitz the tomato mixture untill smooth.",
            "Step 3. Roll out the Pizza Dough and spread the sauce evenly on top.  Save the leftover sauce and freeze for use at a later date.",
            "step 4. Sprinkle most of the Cheese evenly over the sauce",
            "Step 5. Arrange your Cooked Chicken, Bacon and Mushrooms over the pizza base",
            "Step 6. Sprinkle the remaining Cheese over the pizza and place in the oven for 12-15 minutes, or until the cheese on top is golden and bubbling and the base is solid in the middle.",
            "Step 7. Cut, serve and Enjoy...preferably with a beer!"
        ]
    },
    {
        "name": "Hot Dogs",
        "ingredients": [
            {
                "name": "Sausages",
                "qty": "4"
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
        ],
        "steps":[
            "Step 1. Set oven to 180 degrees celsius.  Place sausages and chips into seperate oven-proof dishes.",
            "Step 2. Place chips in oven for 10 minutes before adding sausages to the oven.",
            "Step 3. Cook sausages and chips in the oven for 12-15 minutes",
            "Step 4. Heat the buns in the oven for a few minutes and remove everything from the oven.",
            "Step 5. Build your Hotdogs how you like and enjoy!"
        ]
    },
    {
        "name": "Shakshucka",
        "ingredients": [
            {
                "name": "Diced Red Onion",
                "qty": "1"
            },
            {
                "name": "Diced Pepper",
                "qty": "1"
            },
            {
                "name": "Tinned Tomatoes",
                "qty": "1"
            },
            {
                "name": "Minced Garlic",
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
            },
            {
                "name":"Vegetable Stock",
                "qty":"250ml"
            }
        ],
        "steps":[
            "Step 1. In a frying pan, on a medium heat, fry the Onion for 2-3 minutes. Add the Peppers and Garlic and continue to fry for a further 4-5 minutes.",
            "Step 2. Add herbs and spices along with some salt and pepper and mix well.",
            "Step 3. Add the Tinned Tomatoes and Vegetable Stock. Bring to the boil and simmer for 10-12 minutes.",
            "Step 4. Mix in the Spinnach then cover and simmer until spinnach is wilted.",
            "Step 5. Create four shallow wells in the pan and crack an egg into each.  Lower the heat, cover and cook until eggs are cooked to your liking.",
            "Step 6. Serve in warmed bowls and enjoy!"
        ]
    },{
        "name": "Baked Chicken Arrabbiata",
        "ingredients":[
            {
            "name":"Chicken Legs",
            "qty": 2
            },
            {
                "name":"Sliced Red Onion",
                "qty": 1
            },
            {
                "name":"Sliced Red Pepper",
                "qty": 1
            },
            {
                "name":"Cruchsed Garlic Cloves",
                "qty": 1
            },
            {
                "name":"Chopped tomatoes",
                "qty": 1
            },
            {
                "name":"Spinach",
                "qty": "200g"
            },
            {
                "name":"Chicken Stock",
                "qty": "75ml"
            },
            {
                "name":"White Wine",
                "qty": "100ml"
            },
            {
                "name":"Chilli Flakes",
                "qty": "0.5tspn"
            },
            {
                "name":"Oregano",
                "qty": "1tspn"
            },
            {
                "name":"Pinch of Sugar",
                "qty": 1
            },
            {
                "name":"Pasta",
                "qty": "150g"
            },
        ],
        "steps":[
            "Step 1. Heat the oevn to 200 degrees/180 fan. Heat the oil in frying pan. Season the chicken and fry skin down for 5 minutes until golden, remove and set aside.",
            "Step 2. Fry the onion and pepper in pan for 10 minutes, add the chilli and garlic. Pour in the wine, then simmer for a few minutes until reduced. Tip in tomatoes, oregano, stock, spinach and sugar. Bring to a simmer and cook for 10 minutes. Season",
            "Step 3. Pour the sauce into a roasting tin. Nestle the chicken and bake for 35-40 minutes until cooked through. Cook the pasta and serve with the chicken and extra oregano. Bon appetito"
        ]
    }
])
