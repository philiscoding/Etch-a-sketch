const body = document.getElementsByTagName("body");
//CONTAINER DIV FOR SQUARES
let container = document.createElement("div");
body[0].appendChild(container);
container.className = "container";
container.style.width = "350px";
const createGrid = document.getElementsByClassName("create-grid");

createGrid[0].addEventListener("click", function () {

    let userPrompt = prompt("Enter a number up to 100! ");
    container.remove();

    // ADD NEW CONTAINER
    container = document.createElement("div");
    body[0].appendChild(container);
    container.className = "container";
    container.style.width = "350px";
    //CREATES GRID BASED ON USER INPUT
    for (let i = 0; i < userPrompt; i++) {
        for (let j = 0; j < userPrompt; j++) {
            const gridDiv = document.createElement("div");
            gridDiv.className = "squared-div";
            gridDiv.style.width = `${350 / userPrompt}px`;
            gridDiv.style.height = `${350/ userPrompt}px`;
            container.appendChild(gridDiv);
            gridDiv.addEventListener("mouseenter", function () {
                gridDiv.style.backgroundColor = "lightblue";
            });
        }

    }
});
//CREATES 16x16 GRID
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {

        const gridDiv = document.createElement("div");
        gridDiv.className = "squared-div";
        gridDiv.style.width = `${350 / 16}px`;
        gridDiv.style.height = `${350 /16}px`;
        container.appendChild(gridDiv);
        gridDiv.addEventListener("mouseenter", function () {
            gridDiv.style.backgroundColor = "lightblue";
        })
    }

}