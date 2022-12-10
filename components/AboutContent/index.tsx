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
                    <span className="text-light flex justify-center text-start text-2xl">
                        Specializing in automotive, commercial and residential tinting! Professional quality job for a friend. <br />
                        Auto motive window tinting service serving the St. Johns Country area.
                        <br />
                        <br />
                        120 Cumberland Park Dr Unit 105, Saint Augustine, FL, United States, 32095
                    </span>
                </div>
                <div className="w-full h-[50vh]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.756352249711!2d-81.4882590847132!3d30.072517724200434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e4329c64d52c8d%3A0xdf460f694e3ab6bf!2s120%20Cumberland%20Park%20Dr%20Unit%20105%2C%20St.%20Augustine%2C%20FL%2032095!5e0!3m2!1sen!2sus!4v1670613857386!5m2!1sen!2sus" loading="lazy" className="h-full w-full"></iframe>
                </div>
            </div>
        </div>
    )
}