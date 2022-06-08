const body = document.getElementsByTagName("body");

const container = document.createElement("div");
body[0].appendChild(container);
container.className = "container";

for (let i = 0; i < 16; i++) {

    for (let j = 0; j < 16; j++) {
        const gridDiv = document.createElement("div");
        gridDiv.className = "squared-div";
        container.appendChild(gridDiv);
    }

}
console.log();