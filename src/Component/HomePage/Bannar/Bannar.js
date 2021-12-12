import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import useInterval from 'react-useinterval';
import './Bannar.css';
const Bannar = () => {
    $(document).ready(function () {
        var movementStrength = 25;
        var height = movementStrength / $(window).height();
        var width = movementStrength / $(window).width();
        $("#bannar_id").mousemove(function (e) {
            var pageX = e.pageX - ($(window).width() / 2);
            var pageY = e.pageY - ($(window).height() / 2);
            var newvalueX = width * pageX * 1 - 25;
            var newvalueY = height * pageY * 1 - 50;
            $('#bannar_id').css("background-position", newvalueX + "px     " + newvalueY + "px");
        });
    });

    let clarity = (
        <div className='clarity'>
            <h1>Clarity</h1>
            <small>This is clarity</small>


        </div>
    )
    let swift = (
        <div className='swift'>
            <h1>Swift</h1>
            <small>This is swift</small>
        </div>
    )
    const [item, setItems] = useState(swift);
    const [count, setCount] = useState(0);
    const [play, setPlay] = useState(true);

    useInterval(
        () => {
            setItems(clarity)
            setCount(count + 1)
            if (count === 1) {
                setCount(0)
                setItems(swift)
            }
        },
        play ? 4000 : null
    );
    return (
        <div id='bannar_id'>
            <div className="custom_bnr_css container d-flex justify-content-center align-items-center">
                <div className='bannar_text'>
                    <span className='ban_h1'> {item}    </span>
                </div>
                <div className="bannar_bottom">
                    <p>
                        I'm looking for a <a>Service</a> or <a>Person</a>
                    </p>
                </div>
            </div>
        </div>


    );
};

export default Bannar;

