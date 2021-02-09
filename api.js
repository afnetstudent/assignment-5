fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
.then(res => res.json())
.then(data => disPlayMeals(data));

const disPlayMeals = meals=>{
    console.log(meals);
}


    


