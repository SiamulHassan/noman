import React from 'react';
import { SidebarData } from '../SidebarData/SidebarData';
import './TextSlider.css';
const TextSlider = () => {
    return (
        <div className='justMargin_above'>
            {
                SidebarData.map((data, index) => {
                    return (
                        <ul  >

                            <li key={index}>{data.title}</li>

                        </ul>
                    )
                })
            }
        </div>
    );
};

export default TextSlider;