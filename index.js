'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Date Ideas';

/**
 * Array containing date ideas.
 */
var DATES = [
    'Go to a movie.',
    'Ride a bike together.',
    'Have an indoor picnic.',
    'Go out for a picnic.',
    'Walk around the park.',
    'Discover a new restaurant.',
    'Recreate a favorite date from the past.',
    'Go to the pumpkin patch.',
    'Drive around and look at christmas lights.',
    'Drive around in a new city and stop at places that sound interesting.',
    'You\'re asking me? I\'m just a computer!',
    'Visit the aquarium.',
    'Visit the zoo.',
    'Have a movie marathon.',
    'Watch an entire season of your favorite TV show.',
    'Go out to brunch.',
    'Visit a local brewery.',
    'Go on a wine tour.',
    'Go mini golfing.',
    'Go horse back riding',
    'Rent a boat or jetski for a day. If that\'s too much, rent a kayak.',
    'Take a dance lesson.',
    'Go to a comedy or improv show.',
    'Go back to school. Do a fun event there or just reminisce about the good ol days.',
    'Work out together.',
    'Go birdwatching.',
    'Go on a hike.',
    'Be a tourist for a day and stop at all the local destinations.',
    'Go on a dinner cruis.',
    'Tour a local factory.',
    'Visit a book store together and start your own book club.',
    'Huddle around a fire and roast marshmellows.',
    'Go to a fair and explore.',
    'Go out and "hit the club", as they say.',
    'Cook a delicious meal together.',
    'Sing to each other! La la la!',
    'Vist a local museum. There are tons of them and they\'re lots of fun!',
    'Cross something off both of your bucket lists',
    'Head to a nursery and look at all of the flowers',
    'Go on a short road trip to somewhere not too far,',
    'Go whisky tasting.',
    'Volunteer together. Serve food at a local shelter or help pass out essentials to those who need it. There are pleanty of local opportunities.',
    'Play a board game from your past.',
    'Go to a pet store or shelter and play with the animals.',
    'Go to a play. If that\'s too expensive, many highschool player are great!',
    'Huddle up and look at the moon and starts.',
    'Pick fruit from a local grower. It\'s fun and delicious!',
    'Visit the local market.',
    'Go tandum biking.',
    'Exchange massages.',
    'Play the role of bartender and make fancy drinks for eachother.',
    'Go to trivia night.',
    'Play bingo.',
    'Organize a scavenger hunt.',
    'See a local band perform.',
    'Go to a concert or festival',
    'Go to a sports game.',
    'Watch a parade.',
    'Go ice skating.',
    'Take a ferry ride to some place new.',
    'Go to the craft store, pick out some stuff, and build something awesome together.',
    'Spend the day at an arcade.',
    'Visit a local botanical garden.',
    'Go bowling.',
    'Go on a ghost tour.',
    'Make a dessert. Chocolate covered strawberries, ice cream, pie... It\'s all delicious!',
    'Go snowboarding or skiing.',
    'Take a lesson together. Pottery, glass blowing, or a painting class are all good ideas',
    'Go go carting.'
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetDate');
    },
    'GetNewDateIntent': function () {
        this.emit('GetDate');
    },
    'GetDate': function () {
        // Get a random space fact from the space facts list
        var dateIndex = Math.floor(Math.random() * DATES.length);
        var randomDate = DATES[dateIndex];

        // Create speech output
        var speechOutput = "Here's your date: " + randomDate;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomDate)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say things like give me a date, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
