import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './Firebase';
import { serverTimestamp } from 'firebase/firestore';

function SendMail() {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        console.log(data);
        db.collection('emails').add(
          {
            to: data.to,
            subject: data.subject,
            message: data.message,
            timestamp: serverTimestamp()
          }
        );
        dispatch(closeSendMessage());
    }

    
  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h3>New Message</h3>
        <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
      </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('to', { required: true })} placeholder = "To" type="email" />
            {errors.to && <p className='sendMail__errors'>To is required!</p>}
            <input {...register('subject', { required: true })} placeholder = "Subject" type="text" />
            {errors.subject && <p className='sendMail__errors'>Subject is required!</p>}
            <input {...register('message', { required: true })} placeholder = "Message..." type="text" className="sendMail__message" />
            {errors.message && <p className='sendMail__errors'>Message is required!</p>}

            <div className='sendMail__options' >
                <Button className='sendMail__send' variant="contained" color="primary" type="submit" >Send</Button>
            </div>
        </form>

    </div>
  )
}

export default SendMail
