/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a sample skill built with Amazon Alexa Skills nodejs
 * skill development kit.
 * This sample supports multiple languages (en-US, en-GB, de-GB).
 * The Intent Schema, Custom Slot and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-howto
 *
 **/

'use strict';

let handlers = require('./handlers')

const Alexa = require('alexa-sdk');
const recipes = require('./recipes');

const APP_ID = 'amzn1.ask.skill.a9718b9f-dc30-4b39-8143-90d3099a585f'; // TODO replace with your app ID (OPTIONAL).

const uid = "user1"

const languageStrings = {
    'en': {
        translation: {
            RECIPES: recipes.RECIPE_EN_US,
            SKILL_NAME: 'CS Helper',
            WELCOME_MESSAGE: "Welcome to %s. You can ask a question like, what\'s the recipe for Amazon Global Hackathon? ... Now, what can I help you with?",
            WELCOME_REPROMT: 'For instructions on what you can say, please say help me.',
            DISPLAY_CARD_TITLE: '%s  - Recipe for %s.',
            HELP_MESSAGE: "You can ask questions such as, what\'s the recipe, or, you can say exit...Now, what can I help you with?",
            HELP_REPROMT: "You can say things like, what\'s the recipe, or you can say exit...Now, what can I help you with?",
            STOP_MESSAGE: 'Goodbye!',
            RECIPE_REPEAT_MESSAGE: 'Try saying repeat.',
            RECIPE_NOT_FOUND_MESSAGE: "I\'m sorry, I currently do not know ",
            RECIPE_NOT_FOUND_WITH_ITEM_NAME: 'the recipe for %s. ',
            RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME: 'that recipe. ',
            RECIPE_NOT_FOUND_REPROMPT: 'What else can I help with?',
        },
    },
    'en-US': {
        translation: {
            RECIPES: recipes.RECIPE_EN_US,
            SKILL_NAME: 'American Kitchen Party Planner',
        },
    },
    'en-GB': {
        translation: {
            RECIPES: recipes.RECIPE_EN_GB,
            SKILL_NAME: 'British Kitchen Party Planner',
        },
    },
    'de': {
        translation: {
            RECIPES: recipes.RECIPE_DE_DE,
            SKILL_NAME: 'Assistent für Minecraft in Deutsch',
            WELCOME_MESSAGE: 'Willkommen bei %s. Du kannst beispielsweise die Frage stellen: Welche Rezepte gibt es für eine Truhe? ... Nun, womit kann ich dir helfen?',
            WELCOME_REPROMT: 'Wenn du wissen möchtest, was du sagen kannst, sag einfach „Hilf mir“.',
            DISPLAY_CARD_TITLE: '%s - Rezept für %s.',
            HELP_MESSAGE: 'Du kannst beispielsweise Fragen stellen wie „Wie geht das Rezept für“ oder du kannst „Beenden“ sagen ... Wie kann ich dir helfen?',
            HELP_REPROMT: 'Du kannst beispielsweise Sachen sagen wie „Wie geht das Rezept für“ oder du kannst „Beenden“ sagen ... Wie kann ich dir helfen?',
            STOP_MESSAGE: 'Auf Wiedersehen!',
            RECIPE_REPEAT_MESSAGE: 'Sage einfach „Wiederholen“.',
            RECIPE_NOT_FOUND_MESSAGE: 'Tut mir leid, ich kenne derzeit ',
            RECIPE_NOT_FOUND_WITH_ITEM_NAME: 'das Rezept für %s nicht. ',
            RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME: 'dieses Rezept nicht. ',
            RECIPE_NOT_FOUND_REPROMPT: 'Womit kann ich dir sonst helfen?',
        },
    },
};

// const handlers = ;

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
