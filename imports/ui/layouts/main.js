import '../partials/_header.html'
import { FlightLogs } from '../../api/flightlog/flightlog.js'
import { insert } from '../../api/flightlog/methods.js';
import './main.html';

Template.userHome.onCreated(() => {
    Meteor.subscribe('flightlogs')
});

LogFunc = () => GlobalFlightLogs.find().fetch();

Template.userHome.helpers({
    logs: LogFunc
})

Template.userHome.events({
    'click #new_flight': (event) => {
        event.preventDefault();

        form = document.getElementById('new_flight_form');
        insert({pilot: form.name.value, aircraft: form.rocket.value, moto: form.motto.value})
        form.reset();
    }
})