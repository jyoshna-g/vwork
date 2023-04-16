import React from "react";

function Amenities()
{
    return (
        <div className="container mx-auto px-4 py-8" style={{backgroundColor: "#faf8f2",boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
            <div className="mdl-grid">
             <h2 className="font-serif text-5xl" style={{width: "100%"}}>Workspaces for all</h2>
             <p>Whether you're a startup or a mid size business company, we offer workspace solutions tailored to your needs</p>
             </div>
             <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--4-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <img src="./images/lounge.png" style={{height: "224px"}} alt="V Works" />
                    <div className="mdl-grid">
                    <h3 className="font-serif text-4xl">Freelancers</h3>
                    <p>Our spaces are designed for you to get productive, get creative and when the need arises, to get
                        collaborative. We offer several plans as well to adjust to your need for flexible working
                    </p>
                    </div>
                </div>
                <div className="mdl-cell mdl-cell--4-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                <img src="./images/privateExt.png" style={{height: "224px"}} alt="V Works" />
                    <div className="mdl-grid">
                    <h3 className="font-serif text-4xl">Startups/SMEs</h3>
                    <p>We have private and open spaces designed for startups and SMEs that may be small in strength, but whose ideas
                        are larger than life.
                    </p>
                    </div>
                </div>
                <div className="mdl-cell mdl-cell--4-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                <img src="./images/teamoffwithmanager.png" style={{height: "224px"}} alt="V Works" />
                    <div className="mdl-grid">
                    <h3 className="font-serif text-4xl">Enterprise Teams</h3>
                    <p>Big companies need big solutions. We'll get to know your company and offer solutions that best suit your business.
                    </p>
                    </div>
                </div>
             </div>

             <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--6-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <img src="./images/reception.png" style={{height: "350px", width:"100%"}} alt="V Works" />
                    <div className="mdl-grid">
                    <h3 className="font-serif text-4xl">Event spaces</h3>
                    <p>From a pitch to a social gathering, conduct your events in our upscale spaces.
                    </p>
                    </div>
                </div>
                <div className="mdl-cell mdl-cell--6-col" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                <img src="./images/confRoom.png" style={{height: "350px", width:"100%"}} alt="V Works" />
                    <div className="mdl-grid">
                    <h3 className="font-serif text-4xl">Meeting rooms</h3>
                    <p>A quick huddle or a board meeting - there's room for discussion for any team size
                    </p>
                    </div>
                </div>
             </div>

                <div className="mdl-grid" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                   <span className="mdl-cell--5-col"> <img src="./images/cafe.png" style={{height: "520px", width:"100%"}} alt="V Works" /></span>
                   <span className="mdl-cell mdl-cell--7-col" style={{marginLeft: "16px"}}>
                        <p className="font-serif text-2xl">Amenities</p>
                        <p>VWORK comes with tons of amenities. The following are available at the location: </p><br />
                        <p> - High speed internet</p>
                        <p> - Office Manager at the front desk to greet guests</p>
                        <p> - Plug and work</p>
                        <p> - 24hr power back up</p>
                        <p> - Onsite maintenance</p>
                        <p> - Individual Pods</p>
                        <p> - Phone systems</p>
                        <p> - Secured space with CC camera</p>
                        <p> - Secured access control</p>
                        <p> - And many more</p>
                   </span>
             </div>

        </div>
    )

}

export default Amenities;