import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Event.css'
import { SelectedEventContext } from '../../App';

const Event = ({ volEvent }) => {
    const [selectedEvent, setSelectedEvent] = useContext(SelectedEventContext);

    // random color array for event card text background
    const colorArr = ['#FFBD3E', '#FF7044', '#3F90FC', '#421FCF']
    const randomColor = Math.floor(Math.random() * (4 - 0) + 0);

    // dynamic route depend event name
    let history = useHistory()
    const handleEventLink = (selectedEvent) => {
        const eventLink = selectedEvent.split(' ')
        history.push('/register/' + eventLink[0].toLowerCase() + eventLink[1]);
        setSelectedEvent(volEvent);
    }

    return (
        <div className="col-md-3 col-sm-4 col-10">
            <div className="card-deck mb-3">
                <div className="card">
                    <Link onClick={() => handleEventLink(volEvent.name)} style={{textDecoration:'none'}}>
                        <img src={volEvent.src} className="card-img-top" alt="..." />
                        <div style={{backgroundColor:`${colorArr[randomColor]}`, borderRadius: '10px', padding: '15px'}} className="card-body">
                            <h5 className="card-title text-center text-white mb-0">{volEvent.name}</h5>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Event;