import React from 'react'
import './Theme.css';
import Themeone from './Images/theme(1).png';
import Themetwo from './Images//theme(2).png';
import Themethree from './Images//theme(3).png';
import Themefour from './Images//theme(4).png';
import Themefive from './Images//theme(5).png';
const Theme = () => {
    return (
        <>
            <section className='gallery min-vh-100'>
                <div className='container-lg'>
                    <div className='row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-5'>
                        <div className='col'>
                            <img src={Themeone} class="gallery-item" alt="" />
                        </div>

                        <div className='col'>
                            <img src={Themetwo} class="gallery-item" alt="" />
                        </div>

                        <div className='col'>
                            <img src={Themethree} class="gallery-item" alt="" />
                        </div>

                        <div className='col'>
                            <img src={Themefour} class="gallery-item" alt="" />
                        </div>

                        <div className='col'>
                            <img src={Themefive} class="gallery-item" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Theme
