const etchSquaresContainerDimension = 700;
const apply = document.querySelector(".apply");
const reset = document.querySelector(".reset");
const etchSquaresContainer = document.querySelector(".etch-squares-container");
const etchSquaresNodeList = document.querySelectorAll(".etch-squares-container > *");


apply.addEventListener("click", createIndividualSquares);
console.log(etchSquaresNodeList);
reset.addEventListener("click", resetEtchColors);

etchSquaresContainer.addEventListener("mouseover", fillEtchSquares);


function createIndividualSquares(){
        const etchContainerDimension = document.querySelector("input").value;
        let totalNumOfSquares = etchContainerDimension * etchContainerDimension;
        let individualSquareDimension = etchSquaresContainerDimension / etchContainerDimension;
    if(etchContainerDimension >= 1 && etchContainerDimension <= 100){
        if(etchSquaresContainer.firstElementChild){
            deleteEtchSquares();
        }
        
        let i = 0;
        while(i<totalNumOfSquares){
            const etchSquare = document.createElement("div");
            etchSquare.classList.add("etch-square");
            etchSquare.style.height= individualSquareDimension + "px";
            etchSquare.style.width= individualSquareDimension + "px";

            etchSquaresContainer.appendChild(etchSquare);

            i++;
        }
    }
    
}

function deleteEtchSquares(){

while(etchSquaresContainer.firstElementChild){
    etchSquaresContainer.removeChild(etchSquaresContainer.firstElementChild);
}
}

function resetEtchColors(){
    etchSquaresNodeList.forEach((eachSquare) => {
        style.backgroundColor = "";
    })
    
}

function fillEtchSquares(){
    event.target.style.backgroundColor = "black";
}

