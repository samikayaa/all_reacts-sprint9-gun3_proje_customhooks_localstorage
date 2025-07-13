import React from 'react';


const Navbar = (props) => {
    const toggleMode = (e) => {
        e.preventDefault();
        props.setGeceModu(!props.geceModu);
        document.querySelector(".App").classList.toggle('dark-mode'); //darkmode class'ını ekleyip çıkarıyor.
    };


    return (
        <nav className="navbar">
            <h1>Kripto İzleyici</h1>
            <div className="dark-mode__toggle">
                <div
                    onClick={toggleMode}
                    className={props.geceModu ? 'toggle toggled' : 'toggle'}
                    data-testid="toggle-darkMode"
                />
            </div>
        </nav>
    );
};


export default Navbar;
