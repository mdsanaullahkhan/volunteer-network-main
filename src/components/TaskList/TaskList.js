import React, { useContext } from 'react';
import { EventContext, UserContext } from '../../App';

const TaskList = ({ eventList }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [events, setEvents] = useContext(EventContext);

    const refreshUI = () => {
        fetch('https://volunteer-network-as.herokuapp.com/volTasks?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setEvents(data))
    }

    const deleteEvent = (id) => {
        fetch(`https://volunteer-network-as.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    refreshUI()
                }
            })
    }

    return (
        <div className='col-md-6 d-flex justify-content-center'>
            <div className='d-flex mb-3 justify-content-between ml-3 bg-light border rounded p-4'>
                <div className='mr-2'>
                    <img style={{ height: '150px', width: '175px', borderRadius: '10px' }} src={eventList.src} alt="" />
                </div>
                <div className='mr-2'>
                    <h6>{eventList.eventName}</h6>
                    <p className="font-weight-bold">{eventList.registerDate}</p>
                </div>
                <div className='align-self-end'>
                    <button onClick={() => deleteEvent(`${eventList._id}`)} className='btn btn-secondary'>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default TaskList;