
// Create etch-a-sketch container
function createSketchContainer() {
    const body = document.querySelector('body');
    const sketchContainer = document.createElement('div');
    sketchContainer.setAttribute('class', 'sketch-container');
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
function append4SquareDivs(rowContainer) {
    for (let i = 0; i < 4; i++) {
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



// Create first row
function test0() {
    const rowContainer = createRowContainer();
    create4ChildDivs(rowContainer);
}

// Nest first row into sketch container
function test1() {
    const sketchContainer = createSketchContainer();
    const rowContainer = createRowContainer();
    append4SquareDivs(rowContainer);
    nestRows(sketchContainer, rowContainer);
}

// Nest two rows into sketch container
function test2() {
    const sketchContainer = createSketchContainer();

    for (let i = 0; i < 4; i++) {
        const rowContainer = createRowContainer();
        append4SquareDivs(rowContainer);
        nestRows(sketchContainer, rowContainer);
    }

    addFooter(sketchContainer);
}

// Change color of square when clicked
function test3() {
    const sketchContainer = createSketchContainer();

    for (let i = 0; i < 4; i++) {
        const rowContainer = createRowContainer();
        append4SquareDivs(rowContainer);
        nestRows(sketchContainer, rowContainer);
    }

    addFooter(sketchContainer);

    let squares = sketchContainer.getElementsByClassName('sq-div');
    squares = Array.from(squares);
    squares.forEach(square => square.addEventListener('mouseover', function changeColor(event) {
        event.target.style.backgroundColor = 'pink';
    }));
}

// Make new sketch pad based on user size input
function test4() {
    const newPadBtn = document.getElementById('new-pad-btn');
    newPadBtn.addEventListener('click', getSizeInput);
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

function removeGrid(body, sketchContainer) {
    body.removeChild(sketchContainer);
}

function test5() {
    const body = document.querySelector('body');
    const sketchContainer = createSketchContainer();

    for (let i = 0; i < 4; i++) {
        const rowContainer = createRowContainer();
        append4SquareDivs(rowContainer);
        nestRows(sketchContainer, rowContainer);
    }

    addFooter(sketchContainer);

    removeGrid(body, sketchContainer);
}




