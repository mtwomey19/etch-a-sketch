// Create first row
function test0() {
    const rowContainer = createRowContainer();
    create4ChildDivs(rowContainer, 4);
}

// Nest first row into sketch container
function test1() {
    const sketchContainer = createSketchContainer();
    const rowContainer = createRowContainer();
    append4SquareDivs(rowContainer, 4);
    nestRows(sketchContainer, rowContainer);
}

// Nest two rows into sketch container
function test2() {
    const sketchContainer = createSketchContainer();

    for (let i = 0; i < 4; i++) {
        const rowContainer = createRowContainer();
        append4SquareDivs(rowContainer, 4);
        nestRows(sketchContainer, rowContainer);
    }

    addFooter(sketchContainer);
}

// Change color of square when mouseover
function test3() {
    const sketchContainer = createSketchContainer();
    let numSquares = getSizeInput();

    for (let i = 0; i < numSquares; i++) {
        const rowContainer = createRowContainer();
        append4SquareDivs(rowContainer, numSquares);
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

// Remove grid
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