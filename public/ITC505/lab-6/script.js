document.addEventListener('DOMContentLoaded', function() {
    const misspelledWords = ["teh", "recieve", "adress", "definately", "occurance"];
    const correctWords = {
        "teh": "the",
        "recieve": "receive",
        "adress": "address",
        "definately": "definitely",
        "occurance": "occurrence"
    };
    
    const contentDiv = document.getElementById('content');

    // Display the misspelled words
    const misspelledDiv = document.createElement('div');
    misspelledDiv.textContent = 'Misspelled Words: ' + misspelledWords.join(', ');
    contentDiv.appendChild(misspelledDiv);

    // Create and append the button
    const button = document.createElement('button');
    button.textContent = 'Show Correct Words';
    contentDiv.appendChild(button);

    // Result div for displaying corrected words
    const resultDiv = document.createElement('div');
    contentDiv.appendChild(resultDiv);

    // Add event listener to the button
    button.addEventListener('click', function() {
        const userResponse = confirm('Do you want to see the correct words?');
        if (userResponse) {
            const correctedWords = misspelledWords.map(word => correctWords[word] || word);
            resultDiv.textContent = 'Corrected Words: ' + correctedWords.join(', ');
        } else {
            resultDiv.textContent = 'Correction cancelled by the user.';
        }
    });
});
