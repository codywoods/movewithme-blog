import React from 'react'
import './topbar.css'

export default function TopBar() {
    return (
        <div className='top'>
            <div className='topLeft'>
                movewithme.mmt
            </div>
            <div className='topCentre'>
                <ul className='topList'>
                    <li className='topListItem'>Home</li>
                    <li className='topListItem'>Massage</li>
                    <li className='topListItem'>Movement</li>
                    <li className='topListItem'>Travel</li>
                </ul>
            </div>
            <div className='topRight'>
                Contact
            </div>
        </div>
    );
};

