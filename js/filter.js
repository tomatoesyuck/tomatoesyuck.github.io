// document.addEventListener("DOMContentLoaded", function () {
//   const buttons = document.querySelectorAll("#category-buttons button");
//   const folders = document.querySelectorAll(".folder");

//   buttons.forEach(function (button) {
//     button.addEventListener("click", function () {
//       const category = this.getAttribute("data-category");

//       folders.forEach(function (folder) {
//         if (
//           category === "all" ||
//           folder.getAttribute("data-categories").includes(category)
//         ) {
//           folder.style.display = "inline-block";
//         } else {
//           folder.style.display = "none";
//         }
//       });

//       buttons.forEach(function (btn) {
//         btn.classList.remove("active");
//       });

//       this.classList.add("active");
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("#category-buttons button");
  const folders = document.querySelectorAll(".folder");
  let defaultCategory = "all"; // Set your default category here

  // Function to filter folders based on the selected category
  function filterFolders(category) {
    folders.forEach(function (folder) {
      if (
        category === "all" ||
        folder.getAttribute("data-categories").includes(category)
      ) {
        folder.style.display = "inline-block";
      } else {
        folder.style.display = "none";
      }
    });
  }

  // Set the default category as selected and filter folders accordingly
  buttons.forEach(function (button) {
    const category = button.getAttribute("data-category");
    if (category === defaultCategory) {
      button.classList.add("active");
    }
    button.addEventListener("click", function () {
      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      this.classList.add("active");
      filterFolders(category);
    });
  });

  // Filter folders based on the default category when the page loads
  filterFolders(defaultCategory);
});
