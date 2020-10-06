import React, { useEffect, useState } from 'react';
import RegisteredEventList from '../RegisteredEventList/RegisteredEventList';

const VolRegisList = () => {
    const [registeredEvents, setRegisteredEvents] = useState([])

    
    useEffect(() =>{
        fetch('https://volunteer-network-as.herokuapp.com/allRegEvents')
        .then(res => res.json())
        .then(data => {
            setRegisteredEvents(data);
        })
    })

    const refreshUI = () => {
        fetch('https://volunteer-network-as.herokuapp.com/allRegEvents')
        .then(res => res.json())
        .then(data => {
            setRegisteredEvents(data);
        })
    }

    
    const deleteRegisteredEvent = (id) => {
        fetch(`https://volunteer-network-as.herokuapp.com/deleteRegisteredTask/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    refreshUI();
                }
            })
    }
    return (
        <div>
            <div style={{ minWidth: '1030px' }} className='bg-light mx-4 mt-4 border rounded mb-3'>
                        {/* table header */}
                        <div className='d-flex flex-column container'>
                            <div className='d-flex row p-3 mx-2 mt-3 border rounded' style={{ background: '#F5F6FA'}}>
                                <div className='col-md-2'>
                                <p className='font-weight-bold'>Name</p> 
                                </div>
                                <div className='col-md-3'>
                                <p className='font-weight-bold'>Email ID</p> 
                                </div>
                                <div className='col-md-3'>
                                <p className='font-weight-bold'>Register Date</p>
                                </div>
                                <div className='col-md-3'>
                                <p className='font-weight-bold'>Volunteer List</p>
                                </div>
                                <div className='col-md-1'>
                                <p className='font-weight-bold'>Action</p> 
                                </div>
                            </div>    

                            {/* pass data to registeredEventsList components */}
                            <div className='registered-event-container'>
                                {
                                    registeredEvents.map(registeredEvent => <RegisteredEventList registeredEvent={registeredEvent} deleteRegisteredEvent={deleteRegisteredEvent} key={registeredEvent._id}/>)
                                }
                            </div>                    
                        </div>
                    </div>
        </div>
    );
};

export default VolRegisList;