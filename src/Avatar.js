import React from 'react'
import './Avatar.css';
import Avatarone from './Images/Avatar(1).png';
import Avatartwo from './Images/Avatar(2).png';
import Avatarthree from './Images/Avatar(3).png';
import Avatarfour from './Images/Avatar(4).png';

const Avatar = () => {
    return (
        <>
            <section className='gallery min-vh-100'>

                <div className='container-lg'>
                    <div className='row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-5'>
                        <div className='col'>
                            <img src={Avatarone} class="gallery-item" alt="" />

                        </div>

                        <div className='col'>

                            <img src={Avatartwo} class="gallery-item" alt="" />

                        </div>

                        <div className='col'>
                            <img src={Avatarfour} class="gallery-item" alt="" />
                        </div>

                        <div className='col'>
                            <img src={Avatarthree} class="gallery-item" alt="" />
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Avatar
