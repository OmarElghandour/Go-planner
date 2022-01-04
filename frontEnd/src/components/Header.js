import React from "react";


const Header = () => {
    return (
        <nav>
            <section className="header" id="header">
                <div className="header__content">
                    <div className="header__intro">
                        <h1 className="section__title header__title">
                            let's start <br />
                            planning your life
                        </h1>
                        <div className="header__profile-image">
                            <img className="rounded-image" src={'/assets/images/personal-img.jpg'}></img>
                        </div>
                    </div>

                    <ul className="task__list">
                        <li className="task__list-title row">
                            <h2>Upcomming Plans</h2>
                            <h2>See All</h2>
                        </li>

                        <li className="task__item" >
                            <div className="task_header">
                                <img className="task__image rounded-image" src={'/assets/images/personal-img.jpg'}></img>
                                <h1 className="task__title"> task details title</h1>
                                <img className="task__lable rounded-image" src={'/assets/images/personal-img.jpg'}></img>
                            </div>
                            <div className="task__details row">
                                <div className="task__date row" >
                                    <i className='bx bx-calendar-alt bx-lg icon'></i>
                                    <span className="task">16 April</span>
                                </div>

                                <div className="task__duration row">
                                    <i className='bx bx-stopwatch bx-lg icon'></i>
                                    <span >9 pm - 11 pm</span>
                                </div>
                            </div>
                        </li>

                        <li className="task__item" >
                            <div className="task_header">
                                <img className="task__image rounded-image" src={'/assets/images/personal-img.jpg'}></img>
                                <h1 className="task__title"> task details title</h1>
                                <img className="task__lable rounded-image" src={'/assets/images/personal-img.jpg'}></img>
                            </div>
                            <div className="task__details row">
                                <div className="task__date row" >
                                    <i className='bx bx-calendar-alt bx-lg icon'></i>
                                    <span className="task">16 April</span>
                                </div>

                                <div className="task__duration row">
                                    <i className='bx bx-stopwatch bx-lg icon'></i>
                                    <span >9 pm - 11 pm</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </nav>
    )
}


export default Header;