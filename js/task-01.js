const ulEl = document.querySelector("ul#categories");
const countOfChildren = ulEl.children.length;
console.log(`В списку ${countOfChildren} категорії.`);
const liEl = ulEl.children;
console.log("liEl: ", liEl); 
// [li.item, li.item, li.item]
for (let i = 0; i < liEl.length; i++) {
const childrenOfLi = liEl[i].children;
console.log(childrenOfLi[0]);
const textContent = childrenOfLi[0].textContent;
      console.log("Категорія: ", textContent);
      const countOfChild = childrenOfLi[1].children.length;
      console.log("Кількість елементів: ", countOfChild);
    }

    const list = document.querySelectorAll('li.item');
    
    console.log(`В списку ${list.length} категорії.`);
    
    const ul = document.querySelectorAll('#categories>li');
    ul.forEach(el => {
    
      console.log(
        `Категорія: ${el.firstElementChild.textContent}, Кількість елементів: ${el.lastElementChild.children.length}`,
      );
    });
    