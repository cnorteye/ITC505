document.addEventListener("DOMContentLoaded", function() 
{
    const board = document.getElementById('gameBoard');
    const size = 5; // 5x5 grid

    // Create the game board
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('click', toggleSquare);
        board.appendChild(square);
    }

    // Function to toggle a square and adjacent squares
    function toggleSquare(event) {
        const index = Array.from(board.children).indexOf(event.target);
        toggle(index);
        toggle(index - 1); // left
        toggle(index + 1); // right
        toggle(index - size); // above
        toggle(index + size); // below

        if (checkWin()) {
            alert("You win!");
        }
    }

    // Helper function to toggle a specific square by index
    function toggle(index) {
        if (index < 0 || index >= size * size) return; // Out of bounds
        const square = board.children[index];
        square.classList.toggle('is-off');
    }

    // Check if all squares are turned off
    function checkWin() {
        return Array.from(board.children).every(square => square.classList.contains('is-off'));
    }

    // Randomize the board to a solvable state
    function randomizeBoard() {
        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * size * size);
            board.children[randomIndex].click();
        }
    }

    // Initialize the game
    randomizeBoard();
});
