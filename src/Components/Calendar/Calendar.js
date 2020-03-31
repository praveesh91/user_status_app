import React, { Component } from 'react';
import {Container} from 'reactstrap'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import axios from 'axios'

import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale('en-GB');
BigCalendar.momentLocalizer(moment);

class Calendars extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cal_events: [],
      evtValues: []
    }

  }

  componentDidMount(){
    axios.get("https://praveesh91.github.io/test_json/userStatus.json")
        .then(res =>{
            const data = res.data.members;
            data.map((events) =>{
                const valu = events.activity_periods

                this.setState({
                    evtValues:this.state.evtValues.concat(valu)
                });
            })
            
        })

    }


  render() {

    const {evtValues} = this.state;

    return (
      <Container>
        <div style={{ height: 600, backgroundColor:'white', padding:'2em', margin:'1em' }}>
          <BigCalendar
            events={evtValues}
            step={30}
            defaultView='month'
            views={['month','week','day']}
            defaultDate={new Date()}
          />
        </div>
      </Container>
    );
  }
}

export default Calendars;
