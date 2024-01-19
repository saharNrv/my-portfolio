import React from 'react';
import './Contact.css'
import HeaderSection from '../HeaderSection/HeaderSection';
import Input from '../Form/Input';

export default function Contact() {



  return (
    <section className='pt-24' id='contact'>
      <div className="container-grid">
        <HeaderSection title={'Contact Me'} desc={'Get in touch'} />
        <div className="row-grid lg:px-[100px] " id='contact-row'>
          <div className='col-12 col-xs-12 col-md-6 col-lg-6'>
            <form className='form'>
              <div className='input-wrrap '>
                <Input 
                  element='input'
                  type='text'
                  placeholder='enter your name'
                  className='contact-input'
                />
              </div>

              <div className='input-wrrap '>
                <Input
                 element='input'
                 type='email' 
                 placeholder='enter your email'
                 className='contact-input'
                 />
              </div>

              <div className='input-wrrap'>
                <Input
                  element='textarea'
                  placeholder='enter your message'
                  className='contact-textarea'
                />
               
              </div>
              <button className='contact-btn'>Send Message</button>
            </form>
          </div>
          <div className="col-12 col-xs-12 col-md-6 col-lg-6">
            <div className='contact-socials-wrap '>
              <div className=' contact-social '>

                <a href="https://nourivandsahar@gmail.com" className='contact-link'>
                  <span className='contact-icon'>
                    <i class="fa-solid fa-envelope"></i>

                  </span>
                  <p className='contact-social-text'>nourivandsahar@gmail.com</p>
                </a>



              </div>
             
              <div className=' contact-social '>

                <a href="https://t.me/SaharNourivand" className='contact-link'>
                  <span className='contact-icon'>
                  <i class="fa-brands fa-telegram"></i>

                  </span>
                  <p className='contact-social-text'>@SaharNourivand</p>
                </a>



              </div>
             
              <div className=' contact-social'>

                <a href="https://whatsapp.com" className='contact-link'>
                  <span className='contact-icon'>
                  <i className="fa-brands fa-whatsapp "></i>

                  </span>
                  <p className='contact-social-text'>+989147100462</p>
                </a>



              </div>
             

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
