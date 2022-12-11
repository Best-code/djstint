import { ClassNames } from "@emotion/react";
import { faObjectGroup } from "@fortawesome/free-solid-svg-icons";
import { NextPage } from "next"
import { ReviewContent } from "../../components/ReviewContent"

const Obj =
    [
        {
            reviewer: `Lorem, ipsum.`,
            title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. A, aliquid.`,
            value: 5
        },

        { reviewer: `Lorem, ipsum.`, title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, architecto!`, value: 5 },
        { reviewer: `Lorem, ipsum.`, title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, architecto!`, value: 5 },
        { reviewer: `Lorem, ipsum.`, title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, architecto!`, value: 5 },
        { reviewer: `Lorem, ipsum.`, title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, architecto!`, value: 5 },
        { reviewer: `Lorem, ipsum.`, title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, architecto!`, value: 5 },
        { reviewer: `Lorem, ipsum.`, title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, architecto!`, value: 5 },
        { reviewer: `Lorem, ipsum.`, title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, architecto!`, value: 5 },
        { reviewer: `Lorem, ipsum.`, title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, architecto!`, value: 5 },
        { reviewer: `Lorem, ipsum.`, title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, architecto!`, value: 5 },
        { reviewer: `Lorem, ipsum.`, title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, architecto!`, value: 5 },
        { reviewer: `Lorem, ipsum.`, title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, architecto!`, value: 5 },
        { reviewer: `Lorem, ipsum.`, title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, architecto!`, value: 5 },
        { reviewer: `Lorem, ipsum.`, title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, architecto!`, value: 5 },
        { reviewer: `Lorem, ipsum.`, title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, architecto!`, value: 5 },
        { reviewer: `Lorem, ipsum.`, title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, architecto!`, value: 5 },
        { reviewer: `Lorem, ipsum.`, title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, architecto!`, value: 5 },

        {
            reviewer: `Lorem, ipsum.`,
            title: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, ut.`,
            value: 5
        },

        { reviewer: `Lorem, ipsum.`, title: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, itaque!`, value: 5 },

        { reviewer: `Lorem, ipsum.`, title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque.`, value: 5 },

        {
            reviewer: `Lorem, ipsum.`, title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, dolorem.`,
            value: 5
        },

        {
            reviewer: `Lorem, ipsum.`, title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, animi!`,
            value: 5
        },

        {
            reviewer: `Lorem, ipsum.`, title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, laudantium.`,
            value: 5
        },

        {
            reviewer: `Lorem, ipsum.`,
            title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, aperiam..`,
            value: 5
        }
    ];

const Review: NextPage = () => {
    return (
        <div className="w-screen py-12 flex justify-center bg-black font-avenir">
            <div className=" h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 justify-between">
                {Obj.sort((a, b) => b.title.length - a.title.length).map((item) => (
                    <ReviewContent key={item.title} title={item.title} value={item.value} reviewer={item.reviewer} />
                ))}
            </div>
        </div>
    )
}

export default Review
