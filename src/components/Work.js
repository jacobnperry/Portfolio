import '../App.css';
import me from '../images/me.jpg'
import { Dialog } from '@headlessui/react'
import { useState } from 'react';

function Work() {
  return (
    <div className="App z-0">
        


      <div className='about'>
      <img className='profile' src={me} alt='Profile'></img>
        <h1>Who am I?</h1>
        <p>My name is Jacob Perry, I'm a highly motivated and skilled Software Engineer with a solid foundation in technical support, equipped with 2 years of experience resolving complex technical issues and providing exceptional customer service. Possessing a strong aptitude for problem-solving and a passion for programming. Committed to continuous learning and staying abreast of emerging technologies, I am confident in my ability to contribute to the development of innovative software solutions.</p>
        <h1>What are my qualifications?</h1>
        <ul>
            <li>A degree from <a rel="noreferrer" target='_blank' href='https://www.snhu.edu/'>SNHU</a> in Computer Science</li>
            <li>I've held roles ranging from customer facing to management</li>
            <li>I currently work for <a rel="noreferrer" target='_blank' href='https://drip.com'>Drip</a> as an S3 Technical Escalations Specialist</li>
        </ul>
        <h1>What projects have I worked on?</h1>
        <ul>
            <li></li>
        </ul>
        <MyDialog/>
      </div>
    </div>
  );
}

function MyDialog() {
    let [isOpen, setIsOpen] = useState(false)
  
    return (
        <>
        <button onClick={() => setIsOpen(true)}>Open Dialog</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel className='Dialog'>
            <div>
          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
          </div>
        </Dialog.Panel>
      </Dialog></>
    )
  }

export default Work;
