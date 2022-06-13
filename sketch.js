
// Create etch-a-sketch container
function createSketchContainer() {
    const body = document.querySelector('body');
    const sketchContainer = document.createElement('div');
    sketchContainer.setAttribute('id', 'sketch-container');
    body.appendChild(sketchContainer);
    return sketchContainer;
}

// Create a row container
function createRowContainer() {
    const rowContainer = document.createElement('div');
    rowContainer.setAttribute('class', 'row-container');
    return rowContainer;   
}

// Create 4 child divs
function append4SquareDivs(rowContainer, numSquares) {
    for (let i = 0; i < numSquares; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.setAttribute('class', 'sq-div');
        rowContainer.appendChild(squareDiv);
    }
}

// Place row container in sketch container
function nestRows(sketchContainer, rowContainer) {
    sketchContainer.appendChild(rowContainer);
}

// Add footer
function addFooter(sketchContainer) {
    const footer = document.createElement('h3')
    footer.setAttribute('class', 'footer');
    footer.textContent = 'Etch-a-sketch';
    sketchContainer.appendChild(footer);
}

function getSizeInput() {
    let size = prompt('How many squares per side?');
    let checkedSize = checkSizeInput(size);
    console.log(checkedSize);
    return checkedSize;
}

function checkSizeInput(size) {
    if (!isNaN(size) && size <= 64) {
        return size;
    }
    if (isNaN(size)) {
        size = prompt('Please enter a number');
    } 
    if (size > 64) {
        size = prompt('Please enter a number less than or equal to 64');
    }
     return checkSizeInput(size);
}

function removeGrid() {
    const sketchContainer = document.getElementById('sketch-container');
    const body = document.querySelector('body');
    console.log(sketchContainer);
    if (sketchContainer !== null) {
        body.removeChild(sketchContainer);
    }
}

function createSketchPad() {
    let sketchContainer = createSketchContainer();
    let numSquares = getSizeInput();

    for (let i = 0; i < numSquares; i++) {
        const rowContainer = createRowContainer();
        append4SquareDivs(rowContainer, numSquares);
        nestRows(sketchContainer, rowContainer);
    }

    addFooter(sketchContainer);
    return sketchContainer;
}

function colorSquares(sketchContainer) {
    let squares = sketchContainer.getElementsByClassName('sq-div');
    squares = Array.from(squares);
    squares.forEach(square => square.addEventListener('mouseover', function changeColor(event) {
    event.target.style.backgroundColor = 'pink';
    }));
}

function newSketchPad() {
    removeGrid();
    const sketchContainer = createSketchPad();
    colorSquares(sketchContainer);
}

const newPadBtn = document.getElementById('new-pad-btn');
newPadBtn.addEventListener('click', newSketchPad);





