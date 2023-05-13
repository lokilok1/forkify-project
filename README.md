# Forkify Project

This is a static web application designed for searching and managing recipes. Users can search for recipes, upload their own custom recipes, and display them with useful information and functionalities.

## Features

- **Search functionality**: An input field that sends requests to the API using searched keywords.
- **Display results with pagination**: Shows search results in a paginated format.
- **Display recipe**: Presents the recipe with cooking time, servings, and ingredients.
- **Change servings functionality**: Updates all ingredients according to the current number of servings.
- **Bookmarking functionality**: Displays a list of all bookmarked recipes.
- **Recipes management**: Users can upload their own recipes, which will automatically be bookmarked (achieved by local storage). Note that users can only see their own recipes, not recipes from other users.

The project implements the MVC architecture and the Publisher-Subscriber Pattern.

### Optimization

An algorithm has been developed in the `update()` method to selectively update the `textContent` without rendering all the content again. It matches the updated node using `newEl.isEqualNode(curEl)`.

## Future Improvements

- Display the number of pages between the pagination buttons.
- Ability to sort search results by duration or number of ingredients.
- Perform ingredient validation in the view before submitting the form.
- Improve recipe ingredient input: separate it into multiple fields and allow more than six ingredients.

## Additional Features (To be implemented)

- **Shopping list feature**: A button on the recipe to add ingredients to a list.
- **Weekly meal planning feature**: Assign recipes to the next seven days and show them on a weekly calendar.
- **Nutrition data**: Get nutrition information for each ingredient from the spoonacular API (https://spoonacular.com/food-api) and calculate the total calories of the recipe.

### Demonstration:
https://forkify-rickyltwong.netlify.app/