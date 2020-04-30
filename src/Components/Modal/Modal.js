import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';

const ModalExample = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    let dateString = new Date().toUTCString();
    dateString = dateString.split(' ').slice(0, 4).join(' ');

    return (
            <div>            

                <Button color="primary" onClick={toggle}>View Activity</Button>

                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                        Activity Log for <b>{props.userName}</b> 
                    </ModalHeader>    
                        
                    <ModalBody>
                        <Table borderless>
                            <thead>
                                <tr>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                </tr>
                            </thead>
                            <tbody> 
                                
                            {props.userData.map((data, index) => {
                                let myDate = new Date(data.start).toUTCString().split(' ').slice(0, 4).join(' ');
                                console.log(props.userData)
                                if (dateString === myDate) {
                                    return( 
                                        <tr key={index}>
                                            <td>{data.start}</td>
                                            <td>{data.end}</td>
                                        </tr>
                                    )
                                }
                                else{
                                    return( 
                                        <tr key={index}>
                                            {null}
                                        </tr>
                                    )
                                }
                                
                            })}
                            </tbody>
                        </Table>                         
                    </ModalBody>

                    <ModalFooter>
                        <Link to={{
                            pathname:"/activities",
                            state: {
                                statusData:"Hey link data"
                            }
                        }}>
                        <Button color="primary" onClick={toggle}> View History</Button></Link>
                        <Button color="danger" onClick={toggle}>Close</Button>
                   
                    </ModalFooter>
                </Modal>
                
            </div>
    );
}

export default ModalExample;
