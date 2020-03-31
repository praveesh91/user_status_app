import React, {Component} from 'react';
import axios from 'axios'
import {Row, Col, Card, CardImg, CardBody,CardTitle, CardSubtitle} from 'reactstrap';

import Modal from '../Modal/Modal'

import './Cards.scss'

class Cards extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             status: []
        }
    }

    componentDidMount(){
        axios.get("https://praveesh91.github.io/test_json/userStatus.json")
            .then(res =>{
                const data = res.data.members;
                this.setState({status:data})
            })
    }
    
    render() {
        return (
            <div>
                <Row>
                    <div className="instruction_box">
                        <p>Please select the user to view the activity for today</p>
                    </div>
                </Row>
                <Row>
                {this.state.status.map((data, key) => (
                    <Col md={3} key={key}>
                        <Card style={{margin:'0.5em'}}>
                            <CardImg src={data.profile_image} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>
                                    <p>Name:</p>
                                    <p>{data.real_name}</p>
                                </CardTitle>
                                <CardSubtitle>
                                    <p>Customer Id:</p>
                                    <p>{data.id}</p>
                                </CardSubtitle>
                                <Modal userData={data.activity_periods} userName={data.real_name} />
                            </CardBody>
                        </Card>    
                    </Col>
                ))}
                </Row>
            </div>
        )
    }
}

export default Cards
