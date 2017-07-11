import React from 'react';
import '../App.css';
//import Articles from './ApiCall';
class Event extends React.Component {
    constructor() {
        super();

        this.state = {
            events: [
                {
                    title: 'SuperSoccer',
                    place: 'La loupe',
                    date: '22-Août-2017',
                    sport: 'foot',
                    places: 22
                }, {
                    title: 'Old School session',
                    place: 'Keragan',
                    date: '10-Septembre-2017',
                    sport: 'surf',
                    places: 10
                }, {
                    title: 'ca$h for tricks',
                    place: 'Bordeaux',
                    date: '15-Janvier-2018',
                    sport: 'skate',
                    places: 20
                }, {
                    title: 'Ping-pong show',
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
            <div>

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
          <div className="event">
              <h3 className="eventTitle">{this.props.title}</h3>

                <ul>
                    <li>Place : {this.props.place}</li>
                    <li>Date : {this.props.date}</li>
                    <li>Sport : {this.props.sport}</li>
                    <li>There is {this.props.places} places left.</li>
                </ul>
          </div>

        )
    }
}

export default Event;
