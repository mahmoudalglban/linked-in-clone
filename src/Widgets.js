import React from 'react'
import "./Widgets.css"
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle =(heading,subtitle) => (
        <div className='widgets__articles'>
            <div className='widgets__articleleft'>
                <FiberManualRecordIcon />

            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>

            </div>


        </div>
    )



    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>Elghlban News</h2>
                <InfoIcon/>
            </div>
            {newsArticle(" hossam tantawy "," عايز يركب عربيه يا بلد ")}
            {newsArticle("coronavirus: EG updates","Top news 650 readers")}
            {newsArticle("tesla hits new highs","car & auto - 300 readers")}
            {newsArticle("Bitsoin Breaks $22K"," crypto - 8008 readers")}
        </div>
    )
}

export default Widgets
