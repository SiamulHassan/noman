import React, { useState } from 'react';
import $ from 'jquery';
import '../../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltDown, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'
import { nodeName } from 'jquery';
import { SidebarData } from '../SidebarData/SidebarData';
const Navbar = () => {
    const [sideBar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sideBar);

    // const [dataSidebar, setDataSidebar] = useState(false);
    // const showDataSidebar = () => setDataSidebar(!sideBar);
    // const dataSideBarPosition = (dataSidebar ? '0' : '-1000px');
    // const styleDataside = {
    //     background: '#fff',
    //     width: '480px',
    //     height: '100vh',
    //     position: 'absolute',
    //     top: '0',
    //     right: dataSideBarPosition,
    //     transition: '0.8s',
    // };

    const [search, setSearch] = useState(false);
    const searchBox = () => {
        $('.search_icon').css('display', 'none');
        $('.cross_icon').css('display', 'inline');
        setSearch(!search);

    };
    const sideBarPosition = (sideBar ? '0' : '-1000px');
    const searchPosition = (search ? '0' : '-1000px');

    const hideCross = () => {
        $('.search_icon').css('display', 'inline');
        $('.cross_icon').css('display', 'none');
        setSearch(!search);
    }
    const extraSide = {
        background: '#15171c',
        width: '480px',
        height: '100vh',
        position: 'absolute',
        top: '0',
        right: sideBarPosition,
        transition: '0.8s',
    };
    const searchStyle = {
        background: 'rgb(28 28 28)',
        position: 'fixed',
        width: '100%',
        top: searchPosition,
        height: '100vh',
        zIndex: '1',
        transition: '0.8s',
    }
    return (
        <div className="test" style={searchStyle}>
            <div className="test_text">
                <div className="search_box">
                    <div class="input-group">
                        <div class="form-outline">
                            <input type="search" placeholder='Search' id="form1" class="form-control" />
                        </div>
                        <button type="button" class="btn btn-primary">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="container-fluid main_nav">
                <div className="logo">
                    <p className="l_name">Macfarlanes</p>
                </div>
                <div className="wrap_search_menu">
                    <div className="search">
                        <FontAwesomeIcon className='search_icon'
                            onClick={searchBox} icon={faSearch} />
                        <FontAwesomeIcon
                            onClick={hideCross}
                            className='cross_icon'
                            icon={faTimes}
                            style={{ display: 'none' }}
                        />
                    </div>
                    <nav className="nav">
                        <ul className="f_ul">
                            <li className='home-icon'>
                                <a href="#">Home</a>
                                <FontAwesomeIcon className='drop_home' icon={faLongArrowAltDown} />
                                <ul className="drop_down">
                                    <li> <a href="#">Dropdown One</a> </li>
                                    <li> <a href="#">Dropdown Two</a> </li>
                                    <li> <a href="#">Dropdown Three</a> </li>
                                    <li> <a href="#">Dropdown Four</a> </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="menu">
                        <FontAwesomeIcon className='menu_bar' icon={faBars} onClick={showSidebar} />
                    </div>

                    <div className='sidebarNav' style={extraSide}>
                        <div className="close_wrap">
                            <a href="#">
                                <FontAwesomeIcon onClick={showSidebar} className='icon_close' icon={faTimes} />
                            </a>
                        </div>

                        <div className='sidedataContainer'>
                            {
                                SidebarData.map((data, index) => {
                                    console.log(data);
                                    return (
                                        // ul e style={styleDataside} bosao 
                                        <ul className='text_color' >
                                            {/*  a e  onClick={showDataSidebar} */}
                                            <li key={index}>
                                                <a href="#">{data.title}
                                                    {data.forwardIcon}

                                                </a>

                                            </li>

                                        </ul>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;