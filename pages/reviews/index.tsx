import { ClassNames } from "@emotion/react";
import { faObjectGroup } from "@fortawesome/free-solid-svg-icons";
import { NextPage } from "next"
import { ReviewContent } from "../../components/ReviewContent"

const Obj =
    [
        { reviewer: "Colin Maloney", 
        title: `DJ's Window Tint is top tier tinting.
        Back in May I wanted to add tint but I knew I had to
         find a good tint company. Bad tint can ruin the look 
         of a nice car. Thank god I found DJ's because I could 
         not be happier with the look of my windows. Worked with
          me to legally create the dark look I was looking for.
            Have recommended to many friends and will continue to do so.
        Thanks for the sick car upgrade.`,
         value: 5 },

        { reviewer: "J.P.", 
        title: `DJ has now done four vehicles I have owned. 
        Two Corvettes a truck and SUV. No complaints he also
         did PPF on my first corvette. DJ is dedicated to 
         excellence and is a perfectionist.`
        , value: 5 },
        
        { reviewer: "Ed Walton",
         title: `Just had my car tinted at DJ's
         today. Easy scheduling, reasonable cost, great attitude and real
          sincere.  Oops, I forgot: My car looks awesome.
        Thank You.`,
         value: 5 },

        { reviewer: "Jrcarman", title: `Very pleased with my recent visit to DJ's
         to have my trunk tinted. Scheduling was easy! Discussed
          what I was wanted and pricing at drop off. 
          Vehicle was done by lunch. I would absolutely 
          recommend them to anyone looking to tint their 
          vehicle in the 904 area.`, value: 5 },

        { reviewer: "Alex Mathai", title: `He’s done three cars for me so far, fast, 
        reasonable price and have not had any issues,
         highly recommend`, value: 5 },

        { reviewer: "Duke D.", title: `I chose DJ's as it was rated well on
         Google and was close to me.    I am very pleased I did!   Scheduling an appointment
          was very easy and he was waiting on me when I arrived.   He removed the old/wrinkled
           tint from my truck and replaced it while I waited.   Price was more than fair.
          If you are in the Jacksonville / Saint Augustine area (or beyond?)
           do not hesitate to get your windows tinted here.`,
            value: 5 },

        { reviewer: "C Wolfsen", title: `Very happy with the job on our little family car.
         DJ is quick to respond to texts and answered all my questions. He is very timely 
         and sticks to his schedule, even was running ahead of time. We had a bit of a mixup 
         with the pricing due to my ignorance and DJ went out of his way to make it right, 
        which I really appreciate. We will absolutely be back with future vehicles.`, 
        value: 5 },

        { reviewer: "Dave Edwards", title: `I brought my VW Tiguan to DJ's
         for them to tint the two front door windows. Setting up an appointment
          was super easy and he laid out all the options for all the different
           heat blocking grades of tint they offer. I showed up early and they got
            me right in and went to work. They were done and my credit card swiped 
            no longer than 15 minutes after they pulled the car in. Super fast,
             very professional, the guys are friendly, and they did excellent work!
              I will definitely recommend 
        DJ's to anyone who asks for a local tint shop recommendation.`, 
        value: 5 },
        
        {reviewer: "Harrison Mboche", 
        title:`Excellent experience.  3rd visit to DJ's and couldn't 
        appreciate their service more.
         Very professional,  quick and attention to detail is on point.
          Highly recommend them to anyone wanting any type of Tint job.`,
        value: 5}
    ];

const Review: NextPage = () => {
    return (
        <div className="w-screen py-12 px-12 justify-center bg-gradient-to-b from-black via-dark to-white font-avenir">
            {/* <div className=" h-full px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 justify-between"> */}
            <div className=" h-full flex flex-row flex-wrap w-full justify-between">
                {Obj.sort((a,b) => b.title.length - a.title.length).map((item) => (
                    <ReviewContent key={item.title} title={item.title} value={item.value}  reviewer={item.reviewer}/>
                ))}
            </div>
        </div>
    )
}

export default Review
