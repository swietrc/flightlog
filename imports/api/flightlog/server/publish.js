import { Meteor } from 'meteor/meteor';

import { Flightlogs } from '../flightlog.js';

Meteor.publish('flightlogs', () => {
    return Flightlogs.find();
});