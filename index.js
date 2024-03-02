/*
 Store the dimensions of etch-sqaures (700px) into a variable named etchSquaresDimension.
 Get a number from the user and perform the following calculation: 
    - Dvide 700px by the number provided by user (with var name num);
    - Store that value into variable individualSquareDimension;
    - create num * num amount of squares with the height and width of divSquareDimension;
    - appendChild each of those squares into the etch-squares container;
    - flex-wrap must be applied to etch-squares container for this to work properly;
    - etch-squares container dimensions need to remain fixed for this to work properly;
*/

const etchSquaresContainerDimension = 700;
const apply = document.querySelector(".apply");
const reset = document.querySelector(".reset");
const etchSquaresContainer = document.querySelector(".etch-squares-container");


apply.addEventListener("click", createIndividualSquares);

function createIndividualSquares(){
    const etchContainerDimension = document.querySelector("input").value;
    let totalNumOfSquares = etchContainerDimension * etchContainerDimension;
    let individualSquareDimension = etchSquaresContainerDimension / etchContainerDimension;

    /* If etch-squares-container has children, run the deleteEtchSquares() to remove them
    before populating with the new number of squares.
        If there are no children, run the while loop below
     */
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

function deleteEtchSquares(){

while(etchSquaresContainer.firstElementChild){
    etchSquaresContainer.removeChild(etchSquaresContainer.firstElementChild);
}
}

function resetEtchColors(){

}

