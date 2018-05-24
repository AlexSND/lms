import React, { Component } from 'react'

import phoneIcon from './img/phone-icon.svg'
import mailIcon from './img/mail-icon.svg'
import loginIcon from './img/login-icon.svg'
import registerIcon from './img/register-icon.svg'

import mainLogo from './img/main-logo.svg'
import advantageData from './advantage'
import keypointsData from './keypoints'
import latestCoursesData from './latest-courses'

import './fonts/fonts.css'
import './index.css'
import './App.css'

import Header from './Components/Header/Header'
import Advantage from './Components/Advantage/Advantage';
import KeyPoint from './Components/KeyPoint/KeyPoint';
import LatestCourses from './Components/LatestCourses/LatestCourses';

const headerNavLinks = [
    {
        id: 1,
        anchorId: 'home',
        text: 'home'
    },
    {
        id: 2,
        anchorId: 'courses',
        text: 'courses'
    },
    {
        id: 3,
        anchorId: 'pages',
        text: 'pages'
    },
    {
        id: 4,
        anchorId: 'faculty',
        text: 'faculty'
    },
    {
        id: 5,
        anchorId: 'about',
        text: 'about'
    },
    {
        id: 6,
        anchorId: 'blog',
        text: 'blog'
    },
    {
        id: 7,
        anchorId: 'contact',
        text: 'contact'
    },

]

class App extends Component {
    render() {
        return (
            <div> 
                <Header
                    phoneIcon={phoneIcon}
                    mailIcon={mailIcon}
                    loginIcon={loginIcon}
                    registerIcon={registerIcon}

                    mainLogo={mainLogo}

                    headerNavLinks={headerNavLinks}
                />
                <Advantage advantageData={advantageData}/>
                <KeyPoint keypointsData={keypointsData}/>
                <LatestCourses latestCoursesData={latestCoursesData}/>
            </div>
        )
    }
}

export default App
