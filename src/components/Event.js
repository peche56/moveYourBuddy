import React from 'react';
import '../App.css';
//import Articles from './ApiCall';
class Event extends React.Component {
    constructor() {
        super();

        this.state = {
            events: [
                {
                    place: 'La loupe',
                    date: '22-Août-2017',
                    sport: 'foot',
                    places: 22
                }, {
                    place: 'Keragan',
                    date: '10-Septembre-2017',
                    sport: 'surf',
                    places: 10
                }, {
                    place: 'Bordeaux',
                    date: '15-Janvier-2018',
                    sport: 'foot',
                    places: 20
                }, {
                    place: 'Paris',
                    date: '22-Octobre-2017',
                    sport: 'ping-pong',
                    places: 2
                }
            ]
        }
    }
    render() {

        return (
            <div className="event">

                <singlevent>
                    {this.state.events.map((el, i) => <EventDescrib key={i} {...el}/>)}
                </singlevent>

            </div>
        );
    }
}

class EventDescrib extends React.Component {

    render() {
        return (
            <ul>
                <li>{this.props.place}</li>
                <li>{this.props.date}</li>
                <li>{this.props.sport}</li>
                <li>{this.props.places}</li>
            </ul>

        )
    }
}

export default Event;
