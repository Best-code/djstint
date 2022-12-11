export const AboutContent = () => {

    return (
        <div className="w-screen py-12 flex justify-center bg-gradient-to-b from-black via-dark to-white font-avenir">
            <div className="w-3/4 h-full">
                <div className="flex w-full h-full flex-col justify-center items-center py-8">
                    <span className="text-6xl text-light">
                        About Us
                        <br/>
                        <br/>
                    </span>
                    <span className="text-light text-4xl flex justify-center text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita culpa, maxime vitae placeat corrupti neque soluta quo ullam voluptatem nihil obcaecati et provident adipisci harum.<br/>
                        Auto motive window tinting service serving the St. Johns Country area.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, doloribus!
                    </span>
                </div>
                <div className="w-full h-[50vh]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112320.49505978795!2d-81.63594717091694!3d28.388600693808513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd7ec2fce9cfc7%3A0xeee781b24b584c54!2sDisney&#39;s%20All-Star%20Movies%20Resort!5e0!3m2!1sen!2sus!4v1670728030791!5m2!1sen!2sus" loading="lazy" className="h-full w-full"></iframe>
                </div>
            </div>
        </div>
    )
}