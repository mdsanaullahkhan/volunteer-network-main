import React from 'react';
import EventTask from '../components/EventTask/EventTask';
import Header from '../components/Header/Header';

const EventTasks = () => {
    return (
        <div style={{ backgroundColor: '#E5E5E5' }}>
            <Header />
            <div className='container'>
                <EventTask />
            </div>
        </div>
    );
};

export default EventTasks;