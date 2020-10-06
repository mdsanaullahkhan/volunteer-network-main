import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import brandImg from '../../images/brandLogo.png'
import userIcon from '../../images/logos/users.png'
import plusIcon from '../../images/logos/plus.png'
import VolRegisList from '../../components/VolRegisList/VolRegisList';
import CreateNewEvent from '../../components/CreateNewEvent/CreateNewEvent';

const AdminDashboard = () => {
    const [isVolList, setIsVolList] = useState(true)

    const handleVolList = () => {
        setIsVolList(true)
    }

    const handleAddEvent = () => {
        setIsVolList(false)
    }

    return (
        <div style={{ background: '#E5E5E5', minHeight: '100vh' }}>
            <div className='d-flex mt-4 mb-5'>
                <div style={{ minHeight: '100vh', minWidth: '250px' }} className='pr-5 bg-light'>
                    <Link to="/home" className='brand-img'>
                        <img style={{ height: '50px', marginLeft: '35px' }} src={brandImg} alt="" />
                    </Link>
                    <div className='container mt-4 ml-3'>
                        <Link onClick={handleVolList} style={{textDecoration: 'none'}}>
                           <span style={{fontSize: '15px'}}><img style={{height: '17px', marginRight: '3px'}} src={userIcon} alt=""/>Volunteer register list</span> 
                        </Link>
                    </div>
                    <div className='container mt-2 ml-3'>
                        <Link onClick={handleAddEvent} style={{textDecoration: 'none'}}>
                           <span style={{fontSize: '15px'}}><img style={{height: '17px', marginRight: '3px'}} src={plusIcon} alt=""/>Add event</span> 
                        </Link>
                    </div>
                </div>
                
                <div style={{ width: '100%' }}>
                    <h4 className='bg-light d-block pb-4 font-weight-bold pl-2'>Volunteer register list</h4>
                    {/* conditional div render */}
                    {isVolList ? <VolRegisList/> : <CreateNewEvent/> }
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default AdminDashboard;