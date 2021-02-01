import React from 'react';

export default function SidebarItem({ name, active, handleClick }) {
    return (
        <li>
           <button 
                className={`sidebar-item ${ active ? 'active' : '' }`}
                onClick={handleClick}
           >{name}</button>
        </li>
    )
}
