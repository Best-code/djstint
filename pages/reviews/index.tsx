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
