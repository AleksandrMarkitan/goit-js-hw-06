const numberOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberOfCategories.length}`);

for (const category of numberOfCategories) {
  const titleOfCategory = category.querySelector('h2');
  const numberOfSubcategories = category.querySelectorAll('li');
  console.log(`Category: ${titleOfCategory.textContent}`);
  console.log(`Elements: ${numberOfSubcategories.length}`);
}
