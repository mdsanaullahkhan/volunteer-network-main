import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const RegisteredEventList = ({ registeredEvent, deleteRegisteredEvent }) => {
    
    return (
        <div className='row mt-1 mx-2 mb-2 pt-0 px-1 pb-1 border-bottom d-flex align-items-center'>
            <div className='col-md-2'>
                <p>{registeredEvent.fullName}</p>
            </div>
            <div className='col-md-3'>
                <p>{registeredEvent.email}</p>
            </div>
            <div className='col-md-3'>
                <p>{registeredEvent.registerDate}</p>
            </div>
            <div className='col-md-3'>
                <p>{registeredEvent.eventName}</p>
            </div>
            <div className='col-md-1'>
                <button className='btn text-white btn-danger' onClick={() => deleteRegisteredEvent(registeredEvent._id)}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </div>
    );
};

export default RegisteredEventList;