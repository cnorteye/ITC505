
// netlify/functions/submit.js
exports.handler = async (event) => {
  console.log("Event: ", event);

  if (event.httpMethod === 'POST') {
      try {
          const { hero, adjective1, pluralNoun1, place, verbPast, adjective2, pluralNoun2, verb, exclamation, noun } = JSON.parse(event.body);
          
          if (!hero || !adjective1 || !pluralNoun1 || !place || !verbPast || !adjective2 || !pluralNoun2 || !verb || !exclamation || !noun) {
              return {
                  statusCode: 400,
                  body: JSON.stringify({ message: 'Please fill out all fields' }),
              };
          }

          const story = `
              Once upon a time, there was a brave hero named ${hero}. ${hero} was known throughout the land for being incredibly ${adjective1}. One day, a group of ${pluralNoun1} appeared in the peaceful town of ${place}. The townspeople were terrified and didn't know what to do.

              But ${hero} wasn't afraid. With a mighty roar, ${hero} ${verbPast} into action. Armed with only their ${adjective2} wits and a handful of ${pluralNoun2}, ${hero} set out to save the day.

              As the ${pluralNoun1} approached, ${hero} didn't hesitate. ${hero} began to ${verb} with all their might. "${exclamation}!" shouted the townspeople, watching in awe.

              In the end, ${hero} triumphed. The ${pluralNoun1} were defeated, and peace was restored to ${place}. The townspeople cheered and hailed ${hero} as their savior. And so, the tale of ${hero} and the ${noun} became a legend that would be told for generations to come.
          `;

          return {
              statusCode: 200,
              body: JSON.stringify({ story }),
          };
      } catch (error) {
          console.error("Error parsing request body:", error);
          return {
              statusCode: 400,
              body: JSON.stringify({ message: 'Invalid request body' }),
          };
      }
  } else {
      return {
          statusCode: 405,
          body: JSON.stringify({ message: 'Method Not Allowed' }),
      };
  }
};
