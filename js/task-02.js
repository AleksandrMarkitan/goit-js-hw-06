const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const setListItemstoList = ingredients =>
  document.querySelector('#ingredients').append(
    ...ingredients.map(ingredient => {
      const ingredientItem = document.createElement('li');
      ingredientItem.classList.add('item');
      ingredientItem.textContent = ingredient;
      return ingredientItem;
    })
  );

setListItemstoList(ingredients);
