
let usrInput = 16; //default grid side size
let container = document.getElementById('grid-container');
document.getElementById('cell-btn').addEventListener('click', btnClick);
document.getElementById('clear-btn').addEventListener('click', removeClass);


//initial functions when page is loaded
createCells(usrInput);
styleGrid();
let gridDivs = gridArray();
mouseOver();



function createCells(sideNum){
    //creates cells in the grid container based on user input, assigns them a css class
    let gridNum = Math.pow(sideNum, 2);
    for (let i = 0; i < gridNum; i++) {
        var gridDiv = document.createElement('div'); 
        gridDiv.className = "cell";   
        container.appendChild(gridDiv);
         
     }
}

function styleGrid(){
    //updates the css via JS
    container.style.gridTemplateColumns = `repeat(${usrInput}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${usrInput}, 1fr)`;
}



function gridArray(){
    //updates grid array
    return Array.from(document.getElementsByClassName('cell'));
}


function mouseOver(){
    //changes the class when the mouse hovers over a cell
    gridDivs.forEach(div => div.addEventListener('mouseover', changeClass));

}

function changeClass(){
    //adds 'gridDivFull class
    this.classList.add('gridDivFull');
};

function removeClass(){
    //removes black squares
    gridDivs = gridArray();
    gridDivs.forEach(cell => cell.classList.remove('gridDivFull') )
}

function btnClick(){
    //when the button is clicked it fires off functions to clear the cells, create new cells based on user input
    //and keep the grid style and mouse over functions the same
    usrInput = prompt("Input Number of Cells Per Side", "16");

    if (usrInput > 100){
        alert("Number must be less than 100!");
        return;
    }

    else{
        initialize();
        createCells(usrInput);
        styleGrid();
        gridDivs = gridArray();
        mouseOver();
     }}
    

function initialize(){
    //finds all cell divs and removes them
    gridDivs = gridArray();
    gridDivs.forEach(cell => cell.remove())
}



