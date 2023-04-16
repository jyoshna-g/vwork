import React from "react";

function AboutUs()
{
    return (
    <div className="container mx-auto px-4 py-8" style={{backgroundColor: "#faf8f2",boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }} >
    <img src="./images/building.png" alt="V Work" style={{width: "80%", borderRadius: "25px", display: "block", marginLeft:"auto", marginRight: "auto"}}/>

    <h2 className="font-serif text-5xl" style={{textAlign: "center"}}>About V-WORK Coworking Space</h2>
    <p style={{textAlign: "center", margin:"16px", padding:"0 16px"}}>
        V-Work, founded in 2012, was established by  diverse group of professionals and technocrats who had successfully created
        several technology companies in 1991. Their non-real estate background and extensive experience in both the US and 
        Indian markets contributed to the development of an ecosystem centered around people rather than physical spaces.
        V-Work caters to tech startups and technology companies seeking offices with 2-50 seats and is committed to fostering vibrant
        communities.
    </p>
    <p style={{textAlign: "center", margin:"16px", padding:"0 16px"}}>
        From its humble beginnings in a single, modest space in Hyderabad's bustling "Hitech City Rd, Gangaram, Chanda Nagar, Telangana 500133, India", within the impressive Krishe Sapphire building. As part of their growth strategy, V-Work is actively working on expanding to
    other metro areas, such as Bangalore and Chennai.
        </p>
        <p style={{textAlign: "center",margin:"16px", padding:"0 16px"}}>
            Although V-Work is currently working on developing tools and resources to further support its members, the company has
            already built a strong foundation by creating flexible and collaborative workspaces that cater to the evolving
            needs of tech startups and technology companies.
            </p>


            <p className="text-xl" style={{textAlign: "center", margin:"16px", padding:"0 16px"}}>
                We have a 250 seat office facility with all amenities, plug and play workstations in Madhapur close to
            cybertech/ high tech area in Hyderabad.

                </p>
                <p className="text-xl" style={{textAlign: "center", margin:"16px", padding:"0 16px"}}>
             Its designed for small to medium size businessess, who's looking for anywhere from 1 to 2 seats upto 50 seats
            
                </p>

        <div className="mdl-grid" style={{width: "25%", borderRadius: "25px", display: "block", marginLeft:"auto", marginRight: "auto"}}>
        <h2 className="font-serif text-5xl" style={{textAlign: "center"}}>Contact US</h2>
        <p style={{textAlign: "center"}}> M : +1 215 287 2637</p>
        <p className="font-serif text-xl" style={{textAlign: "center"}}> Open Hours</p>
        <p style={{textAlign: "center"}}> 09:00 am to 06:00 pm - Monday to Friday</p>
        </div>

        <div className="mdl-grid" style={{borderRadius: "25px", display: "block", marginLeft:"auto", marginRight: "auto"}}>
        <h2 className="font-serif text-5xl" style={{textAlign: "center"}}>Location Details</h2>
    <div id= "map" class="container mx-auto py-10 content-center bg-white shadow">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4194.247147459808!2d78.38756774614335!3d17.44248750380623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915efe35c8d9%3A0xe73625a226ee0c02!2sKrishe%20Sapphire!5e0!3m2!1sen!2sus!4v1680356909066!5m2!1sen!2sus"
            width="100%"
            title="Route"
            height="350"
            style={{border: 0}} allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
</div>
</div>
</div>)
}

export default AboutUs;
