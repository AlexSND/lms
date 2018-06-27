import React, { Component } from 'react'

import headerNavLinks from './header-nav'
import advantageData from './advantage'
import keypointsData from './keypoints'
import latestCoursesData from './latest-courses'
import newsData from './news'
import socialLinksData from './social-links'

import './fonts/fonts.css'
import './index.css'
import './App.css'

import Header from './Components/Header/Header'
import Advantage from './Components/Advantage/Advantage'
import KeyPoint from './Components/KeyPoint/KeyPoint'
import LatestCourses from './Components/LatestCourses/LatestCourses'
import LiveClass from './Components/LiveClass/LiveClass'
import News from './Components/News/News'
import Footer from './Components/Footer/Footer'

import ScrollProgress from './Components/ScrollProgress/ScrollProgress'

class App extends Component {
    render() {
        return (
            <div> 
                <Header
                    headerNavLinks={headerNavLinks}
                />
                <Advantage
                    advantageData={advantageData}
                />
                <KeyPoint
                    keypointsData={keypointsData}
                />
                <LatestCourses
                    latestCoursesData={latestCoursesData}
                />
                <LiveClass />
                <News newsData={newsData}/>
                <Footer socialLinksData={socialLinksData}/>
                <ScrollProgress />
            </div>
        )
    }
}

export default App
