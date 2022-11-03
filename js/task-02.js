const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsElement = document.getElementById('ingredients');


const listLi = ingredients.map((ingredient) => { return addElement(ingredient)});



ingredientsElement.append(...listLi);

function addElement(name) {
 
  const newLi = document.createElement("li");


  const newContent = document.createTextNode(name);

  
  newLi.appendChild(newContent);
 
  newLi.className = "item";
  

  return newLi;

 
}
