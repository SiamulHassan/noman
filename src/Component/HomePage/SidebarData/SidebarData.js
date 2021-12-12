import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
export const SidebarData = [
    {
        title: 'Who we are',
        forwardIcon: <FontAwesomeIcon icon={faChevronRight} />,
        backIcon: <FontAwesomeIcon icon={faChevronLeft} />,
        subNav: [
            {
                title: 'Inside who one',
            },
            {
                title: 'Inside who two',
            }
        ]
    },

    {
        title: 'What we do',
        forwardIcon: <FontAwesomeIcon icon={faChevronRight} />,
    },
    {
        title: 'Join us',
        forwardIcon: <FontAwesomeIcon icon={faChevronRight} />,
    },
    {
        title: 'RECENT NEWS',
        forwardIcon: <FontAwesomeIcon icon={faChevronRight} />,
    },
    {
        title: 'CONTACT US',
        forwardIcon: <FontAwesomeIcon icon={faChevronRight} />,
    }

]