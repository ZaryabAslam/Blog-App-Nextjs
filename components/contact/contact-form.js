import classes from './contact-form.module.css';
import { useState, useEffect } from 'react';

import Notification from '../ui/notification';

async function sendContactData(contactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

function ContactForm() {
  //this time using state to getvalues. can also be done with ref
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  // whenever status changes, this status is changing on the basis of api call(succes,pending,error)
  // using it so that that notification component can be dimentalled after 3 seconds
  useEffect(()=> {
    if(requestStatus === 'success' || requestStatus === 'error'){
      const timer = setTimeout(() => {
        // jesy he 3 second guzar jae sttaus aur api eror dono empty kardo
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      // clear timeout so that 1 chal raha ho beech main he dusra chal jae to takra na jaen
      return () => clearTimeout(timer);
    }
  },[requestStatus])
  

  async function sendMessageHandler(event) {
    event.preventDefault();

    // optional: add client-side validation
    // jesy he click hoga submit py, pehly pending chalaengy notification ki state
    setRequestStatus('pending');

    try{
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      // api call chal jae to succes kardo sttaus aur baqi sb sates input ki khali kardo
      setRequestStatus('success');
      setEnteredMessage('');
      setEnteredEmail('');
      setEnteredName('');
    }catch(error){
      // error ajae to notification main error do aur status b error do
      setRequestError(error.message);
      setRequestStatus('error');
    }
  }
  let notification;
  // YE requeststatus hum khud set kar rahy hain, aur iski basis py notification object bna rae hain jo notification component ko bhyjengy
  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form}  onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea
            id='message'
            rows='5'
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {/* agar notification ka object bnahua hy to show notification component
      , aur notification ka object tb he bnyga jb click karengy submit form py
      */}
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;