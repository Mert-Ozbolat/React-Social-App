import React from 'react'
import Topbar from '../../components/topBar/Topbar'
import SideBar from '../../components/sideBar/SideBar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightBar/RightBar'
import "./home.css"


export default function home() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <SideBar />
                <Feed />
                <RightBar />
            </div>
        </>
    )
}
