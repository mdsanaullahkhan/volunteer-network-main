import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SelectedEventContext, UserContext } from '../App';
import brandImg from '../images/brandLogo.png'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { useForm } from 'react-hook-form';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedEvent, setselectedEvent] = useContext(SelectedEventContext);
    const src = selectedEvent.src;

    let history = useHistory()
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const [registerDate, setRegisterDate] = useState(new Date().toLocaleDateString(undefined, options));

    const handleDateChange = (date) => {
        setRegisterDate(date.toLocaleDateString(undefined, options));
    };

    const onSubmit = (data) => {
        const volRegisterData = {...data, registerDate, src}
        fetch('https://volunteer-network-as.herokuapp.com/volRegister', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(volRegisterData)
        })
        .then(res => res.json())
        .then(data => {
            history.push('/eventTasks/' + loggedInUser.name)
        })
    };

    return (
        <div className='d-flex flex-column align-items-center mb-5'>
            <Link to="/home" className='brand-img mb-5'>
                <img style={{ height: '50px' }} className='mt-4' src={brandImg} alt="" />
            </Link>
            <div className='border rounded'>
                <div className='d-flex flex-column pt-3 px-5 pb-3'>
                    <h3 className='mb-4'>Register as a Volunteer</h3>
                    
                    {/* react hook form */}
                    <form action="/newRegistration" method='post' onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                        <input className='form-control mb-2' type="text" name="fullName" id="" placeholder='Full Name' defaultValue={loggedInUser.name} ref={register({ required: true })} />
                        <p className='text-danger margin-1'>{errors.fullName && <span>* This field is required</span>}</p>
                        <input className='form-control mb-2' type="text" name="email" id="" placeholder='Username or Email' defaultValue={loggedInUser.email} ref={register({required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}/>
                        <p className='text-danger margin-1'>{errors.email && <span>* use valid mail / field can't be empty</span>}</p>
                        <div className='mb-2'>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Date picker dialog"
                                        format="dd/MM/yyyy"
                                        value={registerDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </div>
                        <input className='form-control mb-2' type="text" name="description" id="" placeholder='Description' ref={register({required: true, maxLength: 250})} />
                        <p className='text-danger margin-1'>{errors.description && <span>* This field is required</span>}</p>
                        <input className='form-control mb-2' type="text" name="eventName" id="" placeholder='Event Name' defaultValue={selectedEvent.name} ref={register({required: true})} />
                        <p className='text-danger margin-1'>{errors.eventName && <span>* This field is required</span>}</p>
                        <input className='btn btn-primary btn-block font-weight-bold' type="submit" value="Registration" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;