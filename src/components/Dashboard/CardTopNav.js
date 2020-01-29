import React from 'react';

function CardTopNav() {
    return (
        <div className="top-bar">
            <ul className="top-list">
                <button className="top-nav-btn">Applied</button>
                <button className="top-nav-btn2">Skipped</button>
                <button className="top-nav-btn2">Saved</button>
            </ul>
        </div>
    )
}

export default CardTopNav;