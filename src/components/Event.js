import React, { Component } from 'react';
import '../App.css';

class Event extends Component {

  render() {

    const events = [
      {place : 'La loupe',
      date : '22-Août-2017',
      sport : 'foot',
      places : 22},
      {place : 'Keragan',
      date : '10-Septembre-2017',
      sport : 'surf',
      places : 10},
      {place : 'Bordeaux',
      date : '15-Janvier-2018',
      sport : 'foot',
      places : 20},
      {place : 'Paris',
      date : '22-Octobre-2017',
      sport : 'ping-pong',
      places : 2},
    ]

  

    var eventPlace = events.map(function(el){
      return <p>{el.place}</p>
    });
    var eventDate = events.map(function(el){
      return <p>{el.date}</p>
    });
    var eventSport = events.map(function(el){
      return  <p>{el.sport}</p>
    });
    var eventPlace = events.map(function(el){
      return <p>{el.places}</p>
    });

    return (
      <div className="Event">
          {eventPlace}
          {eventDate}
          {eventSport}
          {eventPlace}

      </div>
    );
  }
}

export default Event;
