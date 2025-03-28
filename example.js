
const boxes = document.querySelectorAll(".box");
const radioButtons = document.querySelectorAll('input[type="radio"]');

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
       
        boxes.forEach(b => b.classList.remove("selected"));
     
        box.classList.add("selected");

      
        radioButtons[index].checked = true;
    });
});
