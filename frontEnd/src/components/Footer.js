import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__menu row">
                <i className='bx bxs-home bx-lg footer__icon'></i>
                <i className='bx bx-bell bx-lg footer__icon'></i>
                <i className='bx bx-plus bx-lg footer__add-icon' ></i>
                <i className='bx bx-calendar-alt bx-lg footer__icon'></i>
                <i className='bx bx-user bx-lg footer__icon'></i>
            </div>
        </footer>
    )
}

export default Footer;