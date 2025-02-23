import React, { useRef } from 'react';
import { social_media } from '../Common/Common';

const Contact = () => {
  const form = useRef();


  const contact_Details = {
    contact_info: [
      {
        _id: 'a3',
        logo: "mail-outline",
        text: 'abhishekmishra992016@gmail.com'
      },
      {
        _id: 'a4',
        logo: "call-outline",
        text: '+91 8577887978'
      },
      {
        _id: 'a5',
        logo: "location-outline",
        text: 'Bhadohi, Uttar Pradesh'
      },
    ]
  }


  return (
    <section id='contact' className='py-10 bg-white'>
      <div className='text-gray-800 text-center py-16 px-4 sm:px-6 lg:px-8'>
        <p className='text-gray-600 text-lg uppercase tracking-wider'>CONTACT ME</p>
        <h3 className='text-4xl font-bold text-gray-500 mt-4'>Get In Touch</h3>

        <div className='mt-12 mx-auto max-w-6xl bg-gray-200 p-8 sm:p-12 rounded-lg shadow-lg'>
          <div className='flex flex-col md:flex-row justify-around items-start'>
            <div className='w-full md:w-1/2 flex flex-col items-start mb-8 md:mb-0'>
              <h4 className='text-2xl font-semibold text-gray-500 mb-4'>Contact Information</h4>
              <div className='space-y-4'>
                {contact_Details?.contact_info.map(info => (
                  <div key={info._id} className='flex items-center space-x-3 overflow-x-auto cursor-pointer'>
                    <div className='text-2xl text-gray-500'><ion-icon name={info.logo}></ion-icon></div>
                    <p className='text-lg text-gray-500 break-all'>{info.text}</p>
                  </div>
                ))}
              </div>

            </div>

            <div className='w-full md:w-1/2'>
              <h4 className='text-2xl font-semibold text-gray-500 mb-4'>Send a Message</h4>
              <form ref={form} className='space-y-4'>
                <input
                  type='text'
                  name='user_name'
                  placeholder='Your Name'
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input
                  type='email'
                  name='user_email'
                  placeholder='Your Email'
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input
                  type='tel'
                  name='user_phone'
                  placeholder='Your Phone Number'
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  pattern='[0-9]{10}'
                  maxLength='10'
                />
                <textarea
                  name='message'
                  placeholder='Your Message'
                  required
                  rows='4'
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <button className='btn-primary flex w-full justify-center items-center mt-8 px-6 py-2 sm:px-8 sm:py-3 gap-4 bg-black text-white shadow-lg hover:bg-white hover:text-black border border-black transition-colors duration-300'>
                  <h1 className='text-sm sm:text-xl font-semibold'>Send Message</h1>
                </button>
              </form>

            </div>
          </div>

          <div className='flex justify-center mt-12 '>
            {social_media.map(social => (
              <a key={social._id} className='p-4 text-4xl hover:text-blue-500 transition-colors duration-300' href={social.link} target='_blank' rel='noopener noreferrer'>
                <ion-icon name={social.Symbol}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;