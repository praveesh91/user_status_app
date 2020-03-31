import React, { Component } from 'react';
import {Container} from 'reactstrap'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import axios from 'axios'

import "react-big-calendar/lib/css/react-big-calendar.css";
// import './App.css';

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
            // console.log("Total", data)
            data.map((events) =>{
                this.setState({cal_events:events.activity_periods})
                const valu = events.activity_periods

                    this.setState({
                        evtValues:this.state.evtValues.concat(valu)
                    });
            })
            
        })
        // const {statusData} = this.props.location.state;
        // console.log("Data from modal is", statusData)

}


  render() {


    // const cal_events  = this.state.cal_events.map((evt) =>{
    //     console.log("evt", evt)
    //     return evt
    // })
    // const dummyEvents = [
    //     {
    //         start: 'Mar 29, 2020 18:00:00',
    //         end: 'Mar 29, 2020 23:00:00',
    //         title: 'hi',
    //       },
    //     {
    //         start: 'Mar 19, 2020 18:00:00',
    //         end: 'Mar 19, 2020 23:00:00',
    //         title: 'hi',
    //       }
    // ]

    // console.log("dummyEvents", dummyEvents)
    const {cal_events} = this.state;
    const {evtValues} = this.state;
    console.log("cal_events", evtValues)

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
