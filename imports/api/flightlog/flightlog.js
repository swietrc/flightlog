export const Flightlogs = new Mongo.Collection('flightlogs');

GlobalFlightLogs = Flightlogs

Flightlogs.allow({
    insert: () => 1
})