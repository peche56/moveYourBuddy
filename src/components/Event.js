import React, {Component} from 'react';
import '../App.css';
//import Articles from './ApiCall';
class Event extends Component {
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
                    {this.state.events.map((event, i) => <eventDescrib key={i} events={event}/>)}
                </singlevent>

            </div>
        );
    }
}

class eventDescrib extends React.Component {

    render() {
        return (
            <ul>
                <li>{this.props.event.palce}</li>
                <li>{this.props.event.date}</li>
                <li>{this.props.event.sport}</li>
                <li>{this.props.event.places}</li>
            </ul>

        )
    }

}

export default Event;
