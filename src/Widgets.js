import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {

    const newsArticle = (heading,subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Suez canal is problem fixed","Reacts-8967")}
            {newsArticle("Covid cases update in Canada","Reacts-10897")}
            {newsArticle("India wins the series against England","Reacts-5689")}
            {newsArticle("More top trending news","Reacts-3532")}
        </div>
    )
}

export default Widgets
