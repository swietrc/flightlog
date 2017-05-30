import { Flightlogs } from '../../api/flightlog/flightlog.js';

if (Flightlogs.find().count() === 0) {
    let logs = [
        {
            pilot: "Shibe Doge",
            aircraft: "Moooon Rockeeeeeeet",
            moto: "To the mooooooon ..."
        }, {
            pilot: "Tintin",
            aircraft: "Fusée nucléaire",
            moto: "Objectif Lune ... Pour la Syldaviiiiiie"
        }
    ]

    logs.forEach((log) => Flightlogs.insert(log));
}