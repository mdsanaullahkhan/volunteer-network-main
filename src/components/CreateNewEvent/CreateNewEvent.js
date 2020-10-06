import React from 'react';
import { useForm } from 'react-hook-form';

const CreateNewEvent = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('https://volunteer-network-as.herokuapp.com/addEvent', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            alert('successfully!')
        })
    };
    console.log(errors);

    return (
        <div style={{ minWidth: '1030px' }} className='bg-light mx-4 mt-4 border rounded mb-3 p-5'>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='row d-flex justify-content-center'>
                    <div className='col-md-6'>
                        <label for='name'>Event Title</label>
                        <input className='form-control mb-2' type="text" placeholder="Event title" name="name" ref={register({ required: true, maxLength: 80 })} />
                    </div>
                    <div className='col-md-6'>
                        <label for='registerDate'>Event Date</label>
                        <input className='form-control mb-2' type="date" placeholder="Event Date" name="registerDate" ref={register({ required: true })} />
                    </div>
                    <div className='col-md-6 mb-3'>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Description</label>
                            <textarea name="Description" placeholder="Enter Description" className="form-control" id="exampleFormControlTextarea1" rows="3" ref={register({ required: true })} ></textarea>
                        </div>
                    </div>
                    <div className='col-md-6' style={{marginTop: '30px'}}>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" name="src" />
                            <label className="custom-file-label" for="src">Choose file</label>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <input className='btn btn-primary' type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateNewEvent;