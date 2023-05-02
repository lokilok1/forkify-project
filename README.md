It is an application about searching recipes and display them.
Features:
- Search functionality: input field to send request to API with searched keywords
- Display results with pagination
- Display recipe with cooking time, servings and ingredients
- Change servings functionality: update all ingredients according to current number of servings
- Bookmarking functionality: display list of all bookmarked recipes
- Recipes management: user can upload own recipes and recipes will automatically be bookmarked (achieved by local storage)
- User can only see their own recipes, not recipes from other users

This project implements MVC architecture and Publisher-Subscriber Pattern.

Develop an algorithm in update() method to selectively update the textContent without rendering all the content again:
- matching the updated node using newEl.isEqualNode(curEl);






Improvement to be made:
- Display number of pages between the pagination buttons;
- Ability to sort search results by duration or number of ingredients;
- Perform ingredient validation in view, before submitting the form;
- Improve recipe ingredient input: separate in multiple fields and allow more than 6 ingredients;

Additional features to be made:
- Shopping list feature: button on recipe to add ingredients to a list;
- Weekly meal planning feature: assign recipes to the next 7 days and show on weekly calendar;
- Get nutrition data on each ingredient from spoonacular API (https://spoonacular.com/food-api) and calculate total calories of recipe.