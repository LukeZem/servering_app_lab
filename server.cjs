/* eslint-disable no-undef */
const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const PORT = 3000;

const app = express();

// SERVER DATA //
const meals = [
    {
        name: 'Spaghetti Bolognese',
        type: 'Dinner',
        ingredients: ['spaghetti', 'minced meat', 'tomato sauce', 'onions', 'garlic', 'olive oil'],
        instructions: 'Boil spaghetti. Sauté onions and garlic, add minced meat until browned, and stir in tomato sauce. Serve sauce over spaghetti.',
        vegetarian: false,
        picture: "https://photo.foodgawker.com/wp-content/uploads/2019/09/3487068.jpg"
    },
    {
        name: 'Vegetable Stir-fry',
        type: 'Lunch',
        ingredients: ['broccoli', 'bell peppers', 'carrots', 'soy sauce', 'ginger', 'garlic'],
        instructions: 'Sauté garlic and ginger, add vegetables and stir-fry until tender. Add soy sauce and serve with rice.',
        vegetarian: true,
        picture: "https://www.budgetbytes.com/wp-content/uploads/2022/03/Easy-Vegetable-Stir-Fry-V1.jpg"

    },
    {
        name: 'Pancakes',
        type: 'Breakfast',
        ingredients: ['flour', 'milk', 'eggs', 'sugar', 'baking powder', 'butter'],
        instructions: 'Mix dry and wet ingredients separately, then combine. Cook spoonfuls on a hot, buttered griddle until bubbles form, then flip.',
        vegetarian: true,
        picture: "https://www.allrecipes.com/thmb/WqWggh6NwG-r8PoeA3OfW908FUY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_001-1fa26bcdedc345f182537d95b6cf92d8.jpg"
    },
    {
        name: 'Chicken Salad',
        type: 'Lunch',
        ingredients: ['chicken breast', 'lettuce', 'tomatoes', 'cucumbers', 'olive oil', 'vinegar'],
        instructions: 'Grill chicken breast and slice. Combine with veggies and dress with olive oil and vinegar.',
        vegetarian: false,
        picture: "https://www.eatwell101.com/wp-content/uploads/2019/04/Blackened-Chicken-and-Avocado-Salad-recipe-1.jpg"
    }
];
// SERVER DATA //



// MIDDLEWARE START //
app.use(cors({
    origin: "*"
}))

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, "dist"))); // allows us to serve our build (dist) folder

app.use(express.json());

// MIDDLEWARE END //


// ROUTES START //

app.get("/meals", (req, res) => {
    res.send(meals);
});

// ROUTES END //


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});