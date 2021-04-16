import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/counter/userSlice'
import "./Sidebar.css"

function Sidebar() {

    const user = useSelector(selectUser)
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://thumbs.dreamstime.com/b/green-linear-shape-background-gradient-use-design-143234398.jpg" alt="" />
                <Avatar className="headerOption__icon" src={user?.photoUrl} > {user?.email[0]} </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">234</p>
                </div>

                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2344</p>
                </div>

            </div>
                <div className="sidebar__bottom">
                    <p>Recent</p>
                    {recentItem("react.js")}
                    {recentItem("softwareengineering")}
                    {recentItem("programming")}
                    {recentItem("webdevelopment")}
                </div>
        </div>
    )
}

export default Sidebar
