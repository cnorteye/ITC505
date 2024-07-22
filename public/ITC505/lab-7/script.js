document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded');
    
    const form = document.querySelector('form');
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const formData = new FormData(form);
        const data = {
            hero: formData.get('hero'),
            adjective1: formData.get('adjective1'),
            pluralNoun1: formData.get('pluralNoun1'),
            place: formData.get('place'),
            verbPast: formData.get('verbPast'),
            adjective2: formData.get('adjective2'),
            pluralNoun2: formData.get('pluralNoun2'),
            verb: formData.get('verb'),
            exclamation: formData.get('exclamation'),
            noun: formData.get('noun'),
        };
        
        const response = await fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        console.log(result);
    });
});
