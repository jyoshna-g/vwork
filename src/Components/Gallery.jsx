import React from "react";

function Gallery()
{
    return (
        <div className="container mx-auto px-4 py-8" style={{backgroundColor: "#faf8f2",boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
              <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--4-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <img src="./images/lounge.png" style={{height: "250px"}} alt="V Works" />
                </div>

                <div className="mdl-cell mdl-cell--4-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <img src="./images/chair.jpg" style={{height: "250px"}} alt="V Works" />
                </div>

                <div className="mdl-cell mdl-cell--4-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <img src="./images/confRoom.png" style={{height: "250px"}} alt="V Works" />
                </div>

                <div className="mdl-cell mdl-cell--4-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <img src="./images/desk.jpg" style={{height: "250px"}} alt="V Works" />
                </div>

                <div className="mdl-cell mdl-cell--4-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <img src="./images/privateExt.png" style={{height: "250px"}} alt="V Works" />
                </div>

                <div className="mdl-cell mdl-cell--4-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <img src="./images/privateInt.png" style={{height: "250px"}} alt="V Works" />
                </div>

                <div className="mdl-cell mdl-cell--4-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <img src="./images/reception.png" style={{height: "250px"}} alt="V Works" />
                </div>

                <div className="mdl-cell mdl-cell--4-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <img src="./images/space.jpg" style={{height: "250px"}} alt="V Works" />
                </div>

                <div className="mdl-cell mdl-cell--4-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <img src="./images/teamoffwithmanager.png" style={{height: "250px"}} alt="V Works" />
                </div>

                <div className="mdl-grid">
                <a href="*" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={{margin: "16px 16px 16px auto", color: "black", backgroundColor: "#cfbfb8"}}>View more</a>
                </div>
                </div>
        </div>
    )
}

export default Gallery;