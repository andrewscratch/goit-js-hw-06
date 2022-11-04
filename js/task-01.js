console.log(
  "Number of categories: ",
  document.querySelectorAll(".item").length
);

const categoryTitles = [];
document.querySelectorAll(".item h2").forEach(function (title) {
  categoryTitles.push(title.textContent);
});

const subCategoryCounts = [];
document.querySelectorAll(".item ul").forEach(function (subCategory) {
  subCategoryCounts.push(subCategory.children.length);
});

for (let i = 0; i < categoryTitles.length; i += 1) {
  console.log("Category: ", categoryTitles[i]);
  console.log("Elements: ", subCategoryCounts[i]);
}
    