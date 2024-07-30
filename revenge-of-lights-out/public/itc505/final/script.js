document.addEventListener("DOMContentLoaded", function() 
{
    const board = document.getElementById('gameBoard');
    const resetButton = document.getElementById('resetButton');
    const moveCountDisplay = document.getElementById('moveCount');
    const timerDisplay = document.getElementById('timer');
    const size = 5; // 5x5 grid
    let moveCount = 0;
    let timer;
    let secondsElapsed = 0; // Explicitly declaring with 'let'

    // Create the game board
    function createBoard() {
        board.innerHTML = ''; // Clear existing board
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('click', toggleSquare);
            board.appendChild(square);
        }
    }

    // Function to toggle a square and adjacent squares
    function toggleSquare(event) {
        moveCount++;
        updateMoveCount();

        const index = Array.from(board.children).indexOf(event.target);
        toggle(index);
        toggle(index - 1); // left
        toggle(index + 1); // right
        toggle(index - size); // above
        toggle(index + size); // below

        if (checkWin()) {
            clearInterval(timer);
            alert(`You win! Total Moves: ${moveCount}, Time: ${formatTime(secondsElapsed)}`);
            
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

      // Update the move count display
    function updateMoveCount() {
        moveCountDisplay.textContent = moveCount;
    }

    // Update the timer display
    function updateTime() {
        secondsElapsed++;
        timerDisplay.textContent = formatTime(secondsElapsed);
    }

    // Format the time as mm:ss
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // Reset the board and counters
    function resetBoard() {
        Array.from(board.children).forEach(square => square.classList.remove('is-off'));
        moveCount = 0;
        secondsElapsed = 0;
        updateMoveCount();
        timerDisplay.textContent = formatTime(secondsElapsed);
        clearInterval(timer);
        startTimer();
    }

    // Start the timer
    function startTimer() {
        timer = setInterval(updateTime, 1000);
    }

    // Randomize the board to a solvable state
    function randomizeBoard() {
        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * size * size);
            board.children[randomIndex].click();
        }
    }

    // Attach event listener to the reset button
    resetButton.addEventListener('click', resetBoard);


    // Initialize the game
    createBoard();
    randomizeBoard();
    startTimer();
});
