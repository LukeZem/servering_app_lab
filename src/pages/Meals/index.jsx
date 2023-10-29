import axios from 'axios';
import { useEffect, useState } from 'react'

const Meals = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        let res = axios({
            method: "GET",
            url: "http://localhost:3000/meals"
        }).then((res) => {
            console.log(res);
            setMeals(res.data)
        })

    }, []);


    return (
        <div>
            <ul>
                {meals.map((meal, index) => {
                    return <li key={meal.name + index}>
                        <h2>{meal.name}</h2>
                        <p>Course: {meal.type}</p>
                        <p>Ingredients: {meal.ingredients}</p>
                        <p>Instructions: {meal.instructions}</p>
                        <p>Vegetarian: {meal.vegetarian ? 'Yes' : 'No'}</p>
                        <img src={meal.picture} alt="meal pic" />
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Meals;
