import React from "react";

function Home(){
    return (
        <div>
    
    <div id="home" style={{backgroundColor: "#faf8f2"}}  class="shadow">
        <div className="mdl-grid" style={{padding: "0px 48px 0px"}}>
        {/* <a href="#amenities" className="font-extralight text-xl" style={{margin: "16px 0 0 auto", color: "black"}}>Amenities</a>
        <a href="#gallery" className="font-extralight text-xl" style={{margin: "16px 0 0 48px", color: "black"}}>Gallery</a>
        <a href="#home" className="font-extralight text-xl" style={{margin: "16px 0 16px auto", color: "black"}}>Home</a>
         */}
        </div>
        <div class="container mx-auto px-4 py-8" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
            <div style={{position: "relative", textAlign: "center"}}>
            <img src="./vwork/images/building.png" alt="V Works" style={{width: "100%", borderRadius: "25px"}}/>
            <div style={{ position: "absolute", top: "150px", width: "500px", height: "120px", backgroundColor: "#cfbfb8", borderRadius: "0px 25px"}}>
                <p className="font-serif text-5xl" style={{marginTop: "16px"}}> V - WORK </p>
                <p className="font-extralight text-2xl">  The Hybrid Office</p></div>
            </div>
            <div className="mdl-grid">
            <div class="mdl-cell demo-card-square mdl-card mdl-shadow--2dp" style={{borderRadius: "25px"}}>
            <img src="/images/space.jpg" alt="V Works" />
            </div>
            <div class="mdl-cell demo-card-square mdl-card mdl-shadow--2dp" style={{borderRadius: "25px"}}>
            <img src="/images/chair.jpg" alt="V Works" />
            </div>
            <div class="mdl-cell demo-card-square mdl-card mdl-shadow--2dp" style={{borderRadius: "25px"}}>
            <img src="/images/desk.jpg" alt="V Works" />
            </div>
            </div>
        <div className="mdl-grid">
        <h2 class="font-serif text-4xl">ABOUT V WORK</h2>
        <p style={{textAlign: "left"}}>Krishe Sapphire - The building is a <strong>Grade A</strong> modern office building designed in a way to provide design 
        flexibility for Corporates. The building is a <strong>Green</strong> building with its efficient water recycling systems, energy saving 
        electrical systems, highly efficient air conditioning systems with complete power back up, eco friendly buildinf material to 
        ensure high quality, long life and low maintenance. The building is located in the <strong>prime</strong> location of Madhapur with
        accesaibility to metro rail and public transportation. Located at <strong>Durgam Cheruvu Metro station</strong>, has excellent 
        connectivity to city centre at Ameerpet Metro hub. With Metro rail being extended to the Airport, offers 
        direct connectivity to Airport</p>
        </div>

        <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--8-col-desktop" style={{marginLeft: "0px"}}>
            <h2 class="font-serif text-4xl" style={{textAlign: "left"}}>PROPERTY SPECIFICATION</h2>
            <div className="mdl-grid">
                <span class="material-symbols-outlined" style={{fontSize: "55px", margin: "24px"}}>adf_scanner</span>
                <span class="material-symbols-outlined" style={{fontSize: "55px", margin: "24px"}}>apartment</span>
                <span class="material-symbols-outlined" style={{fontSize: "55px", margin: "24px"}}>meeting_room</span>
                <span class="material-symbols-outlined" style={{fontSize: "55px", margin: "24px"}}>print_connect</span>
                </div>
            </div>
            <div className="mdl-cell mdl-cell--4-col-desktop" style={{backgroundColor: "#cfbfb8", textAlign: "center", borderRadius: "25px"}}>
            <h2 class="font-serif text-4xl">CONTACT US</h2>
            <p>Ramsoft IT services / V work Hybrid spaces, 7th Floor <br/> Sy.No.88, Krishe Sapphire, Hi-techcity Main Road, Madhapur, Hyderabad - 500081 <br/>victor@ramsoft.net</p>
            </div>
            </div>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias amet animi atque autem
                consequatur
                cumque debitis deleniti doloremque doloribus ducimus earum enim eos esse et eum eveniet excepturi
                expedita
                explicabo facilis fuga fugiat hic id illum impedit in incidunt inventore ipsa ipsam ipsum iste iure
                iusto
                laboriosam laborum laudantium libero magnam maiores maxime minima minus molestiae mollitia nam natus
                nemo
                neque nisi nobis non nostrum nulla numquam obcaecati officia officiis omnis optio pariatur perferendis
                perspiciatis placeat praesentium quae quam quas qui quibusdam quidem quis quod ratione recusandae
                reiciendis
                rem repellat reprehenderit repudiandae rerum saepe sapiente sed sequi sint sit soluta suscipit
                temporibus
                tenetur totam ullam unde ut velit veniam veritatis vero voluptas voluptatem voluptates voluptatibus
                voluptatum. Accusamus adipisci alias aliquid amet animi architecto asperiores atque autem beatae
                blanditiis
                commodi consequatur consequuntur corporis cumque cupiditate debitis deleniti deserunt dignissimos
                doloremque
                doloribus dolorum ea earum eius eligendi enim eos error est et eum ex excepturi expedita explicabo
                facilis
                fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsam ipsum iste iure iusto
                laboriosam laborum laudantium libero magnam maiores maxime minima minus molestiae mollitia nam natus
                nemo
                neque nisi nobis non nostrum nulla numquam obcaecati officia officiis omnis optio pariatur perferendis
                perspiciatis placeat praesentium quae quam quas qui quibusdam quidem quis quod ratione </p> */}
        </div>
    </div>


{/* <div id="about" class="container mx-auto py-10 bg-white shadow">
    <div class="container mx-auto px-4 py-8">
        <h2 class="text-2xl mb-4">About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias amet animi atque autem
            consequatur
            cumque debitis deleniti doloremque doloribus ducimus earum enim eos esse et eum eveniet excepturi
            expedita
            explicabo facilis fuga fugiat hic id illum impedit in incidunt inventore ipsa ipsam ipsum iste iure
            iusto
            laboriosam laborum laudantium libero magnam maiores maxime minima minus molestiae mollitia nam natus
            nemo
            neque nisi nobis non nostrum nulla numquam obcaecati officia officiis omnis optio pariatur
            perferendis
            perspiciatis placeat praesentium quae quam quas qui quibusdam quidem quis quod ratione recusandae
            reiciendis
            rem repellat reprehenderit repudiandae rerum saepe sapiente sed sequi sint sit soluta suscipit
            temporibus
            tenetur totam ullam unde ut velit veniam veritatis vero voluptas voluptatem voluptates voluptatibus
            voluptatum. Accusamus adipisci alias aliquid amet animi architecto asperiores atque autem beatae
            blanditiis
            commodi consequatur consequuntur corporis cumque cupiditate debitis deleniti deserunt dignissimos
            doloremque
            doloribus dolorum ea earum eius eligendi enim eos error est et eum ex excepturi expedita explicabo
            facilis
            fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsam ipsum iste iure iusto
            laboriosam laborum laudantium libero magnam maiores maxime minima minus molestiae mollitia nam natus
            nemo
            neque nisi nobis non nostrum nulla numquam obcaecati officia officiis omnis optio pariatur
            perferendis
            perspiciatis placeat praesentium quae quam
        </p>
    </div>
</div>
<br/>
<div id="contactUs" class="container mx-auto py-10 bg-white shadow">
    <div class="container mx-auto px-4 py-8">
        <h2 class="text-2xl mb-4">Contact Us</h2>
        <form id="contact-form" class="space-y-4">
            <div>
                <label for="name" class="block mb-1">Name:</label>
                <input type="text" id="name" name="name" class="w-full p-2 border border-gray-300 rounded"></input>
            </div>
            <div>
                <label for="email" class="block mb-1">Email:</label>
                <input type="email" id="email" name="email" class="w-full p-2 border border-gray-300 rounded"></input>
            </div>
            <div>
                <label for="message" class="block mb-1">Message:</label>
                <textarea id="message" name="message" rows="5"
                          class="w-full p-2 border border-gray-300 rounded"></textarea>
            </div>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
            </button>
            <div id="form-message" class="mt-4"></div>
        </form>
    </div>
</div>
<br/>
<div id= "map" class="container mx-auto py-10 content-center bg-white shadow">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4194.247147459808!2d78.38756774614335!3d17.44248750380623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915efe35c8d9%3A0xe73625a226ee0c02!2sKrishe%20Sapphire!5e0!3m2!1sen!2sus!4v1680356909066!5m2!1sen!2sus"
            width="100%"
            title="Route"
            height="350"
            style={{border: 0}} allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
</div>

<br/>


<footer id='footer'>
    <div class="container mx-auto py-10 content-center bg-white shadow">
        <div class="flex items-center justify-center space-x-10">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7"
                    fill="currentColor"
                    style={{color: "#1877f2"}}
                    viewBox="0 0 24 24">
                <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
        
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7"
                    fill="currentColor"
                    style={{color: "#c13584"}}
                    viewBox="0 0 24 24">
                <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
        
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7"
                    fill="currentColor"
                    style={{color: "#ff0000"}}
                    viewBox="0 0 24 24">
                <path
                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>

            <a href="mailto:youremail@example.com" class="text-gray-700 hover:text-gray-900">
                <i class="fas fa-envelope"></i>
            </a>
            <a href="tel:+1234567890" class="text-gray-700 hover:text-gray-900">
                <i class="fas fa-phone-alt"></i>
            </a>
        </div>
    </div>
</footer> */}

        </div>
    );
}

export default Home;
