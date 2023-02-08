import React from 'react'
import Girl from './Images/Girl.png';
import Boy from './Images/boy.png';
import Avatar1 from './Images/Avatar(1).png';
import Avatar2 from './Images/Avatar(2).png';
import Avatar3 from './Images/Avatar(3).png';
import Avatar4 from './Images/Avatar(4).png';

import Tone1 from './Images/Tone(1).png';
import Tone2 from './Images/Tone(2).png';
import Tone3 from './Images/Tone(3).png';
import Tone4 from './Images/Tone(4).png';
import Tone5 from './Images/Tone(5).png';
import Tone6 from './Images/Tone(6).png';
import Tone7 from './Images/Tone(7).png';
import Tone8 from './Images/Tone(8).png';
import Tone9 from './Images/Tone(9).png';

import Th1 from './Images/Th(1).png';
import Th2 from './Images/Th(2).png';
import Th3 from './Images/Th(3).png';
import Th4 from './Images/Th(4).png';
import Th5 from './Images/Th(5).png';

import Main from './Images/Main-Avatar.png';
import './Bluebookone.css';
import './Bluebooktwo.css';
const Bluebookone = () => {
    return (
        <>
            <div>
                <div className='image-bg'>
                    <div className='one-main'>
                        <div className='rounded-circle'>
                            <p>1<span className='span-Avatar-one'>Create an Avatar</span></p>
                        </div>

                    </div>
                    <div className='rounded-circle'>
                        <p>2<span className='span-Avatar-two'>Create an Avatar</span></p>
                    </div>
                    <h1>Welcome to Bluebook! Build an avatar that suits you best</h1>

                    <div className='inner-div'>
                        <p className='select-gender'>Select an gender</p>
                        <img src={Girl} className='girl-gender' />
                        <img src={Boy} className='boy-gender' />

                        <p className='select-avatar'>Select an avatar</p>
                        <img src={Boy} className='boy-avatar' />
                        <img src={Avatar1} className='avatar1-gender' />
                        <img src={Avatar2} className='avatar2-gender' />
                        <img src={Avatar3} className='avatar3-gender' />
                        <img src={Avatar4} className='avatar4-gender' />


                        <p className='select-skintone'>Select an Skintone</p>
                        <img src={Tone1} className='Tone1' />
                        <img src={Tone2} className='Tone2' />
                        <img src={Tone3} className='Tone3' />
                        <img src={Tone4} className='Tone4' />
                        <img src={Tone5} className='Tone5' />
                        <img src={Tone6} className='Tone6' />
                        <img src={Tone7} className='Tone7' />
                        <img src={Tone8} className='Tone8' />
                        <img src={Tone9} className='Tone9' />

                        <p className='select-theme'>Select an Theme</p>
                        <img src={Th1} className='Th1' />
                        <img src={Th2} className='Th2' />
                        <img src={Th3} className='Th3' />
                        <img src={Th4} className='Th4' />
                        <img src={Th5} className='Th5' />


                        <div className='avatar-profile'>
                            <img src={Main} className="Main-avatar" />
                            <p className='edit'>Edit_Name</p>
                        </div>
                    </div>
                    <div className='rec'>
                        <p className='proceed'>Proceed</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Bluebookone
