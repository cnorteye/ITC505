// const express = require('express');
// const logger = require('morgan');
// const path = require('path');
// const server = express();

// server.use(express.urlencoded({ extended: true }));
// server.use(logger('dev'));

// // Routes
// server.get('/do_a_random', (req, res) => {
//     res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`);
// });

// // POST route to handle form submission
// server.post('/submit', (req, res) => {
//     const { hero, adjective1, pluralNoun1, place, verbPast, adjective2, pluralNoun2, verb, exclamation, noun } = req.body;
//     if (!hero || !adjective1 || !pluralNoun1 || !place || !verbPast || !adjective2 || !pluralNoun2 || !verb || !exclamation || !noun) {
//         res.send(`
//             <h1>Submission Failed</h1>
//             <p>Please fill out ALL fields</p>
//             <a href="/">Go Back to Form</a>
//         `);
//         return;
//     }
    
//     const story = `
//         Once upon a time, there was a brave hero named ${hero}. ${hero} was known throughout the land for being incredibly ${adjective1}. One day, a group of ${pluralNoun1} appeared in the peaceful town of ${place}. The townspeople were terrified and didn't know what to do.

//         But ${hero} wasn't afraid. With a mighty roar, ${hero} ${verbPast} into action. Armed with only their ${adjective2} wits and a handful of ${pluralNoun2}, ${hero} set out to save the day.

//         As the ${pluralNoun1} approached, ${hero} didn't hesitate. ${hero} began to ${verb} with all their might. "${exclamation}!" shouted the townspeople, watching in awe.

//         In the end, ${hero} triumphed. The ${pluralNoun1} were defeated, and peace was restored to ${place}. The townspeople cheered and hailed ${hero} as their savior. And so, the tale of ${hero} and the ${noun} became a legend that would be told for generations to come.
//     `;
    
//     res.send(`
//         <h1>Submission Successful</h1>
//         <p>${story}</p>
//         <a href="/">Go Back to Form</a>
//     `);
// });

// // Setup static page serving for all the pages in "public"
// const publicServedFilesPath = path.join(__dirname, 'public');
// server.use(express.static(publicServedFilesPath));

// // The server uses port 80 by default unless you start it with the extra command line argument 'local' like this:
// //       node server.js local
// let port = 80;
// if (process.argv[2] === 'local') {
//     port = 8080;
// }
// server.listen(port, () => console.log('Ready on localhost!'));
