import React from "react";
import lounge from '../images/lounge.png'
import space from '../images/space.jpg';
import chair from '../images/chair.jpg';
import desk from '../images/desk.jpg';
import confRoom from '../images/confRoom.png';
import privateExt from '../images/privateExt.png';
import privateInt from '../images/privateInt.png';
import reception from '../images/reception.png';
import teamwithmanager from '../images/teamoffwithmanager.png';

function Gallery()
{
    return (
        <div className="container mx-auto px-4 py-8" style={{backgroundColor: "#faf8f2",boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
              <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--4-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <img src={lounge} style={{height: "250px"}} alt="V Works" />
                </div>

                <div className="mdl-cell mdl-cell--4-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <img src={chair} style={{height: "250px"}} alt="V Works" />
                </div>

                <div className="mdl-cell mdl-cell--4-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <img src={confRoom} style={{height: "250px"}} alt="V Works" />
                </div>

                <div className="mdl-cell mdl-cell--4-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <img src={desk} style={{height: "250px"}} alt="V Works" />
                </div>

                <div className="mdl-cell mdl-cell--4-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <img src={privateExt} style={{height: "250px"}} alt="V Works" />
                </div>

                <div className="mdl-cell mdl-cell--4-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <img src={privateInt} style={{height: "250px"}} alt="V Works" />
                </div>

                <div className="mdl-cell mdl-cell--4-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <img src={reception} style={{height: "250px"}} alt="V Works" />
                </div>

                <div className="mdl-cell mdl-cell--4-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <img src={space} style={{height: "250px"}} alt="V Works" />
                </div>

                <div className="mdl-cell mdl-cell--4-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <img src={teamwithmanager} style={{height: "250px"}} alt="V Works" />
                </div>

                <div className="mdl-grid">
                <a href="*" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={{margin: "16px 16px 16px auto", color: "black", backgroundColor: "#cfbfb8"}}>View more</a>
                </div>
                </div>
        </div>
    )
}

export default Gallery;