import React from 'react'
import './Congragulation.css'
const Congragulation = () => {
    return (
        <>
            <div className='main-bg'>
                <div className='main-round'>
                    <div className='rounded-circle'>
                        <p className='Avatar'>Create an Avatar</p>
                    </div>
                </div>
                <div className='role-circle'>
                    <div className='rounded-circle'>2
                        <p className='other-info'>Other Information</p>
                    </div>

                </div>
                <h1 className='about-yourself'>Tell us a little bit about yourself</h1>
                <div className='target-inner-div'>
                    <div className='role-cong'>
                        <p className='cong'>Congratulations!  Your profile has been<br /></p><span className='created'>created!</span> <br />
                        <p className='cong-end'>Click on continue to start using product</p> <br /> <span className='today'>today</span>
                        <button className='Go-back-cong-btn'>GoBack</button>
                        <button className='Continue-cong-btn'>Countinue</button>

                    </div>
                </div>
                <div className='Avatar-role'></div>

            </div>

        </>
    )
}

export default Congragulation
