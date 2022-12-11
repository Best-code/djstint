import { NextPage } from "next"
import Image from "next/image"

const Gallery: NextPage = () => {
    return (
        <div className="w-screen py-12 flex justify-center bg-black font-avenir">
            <div className=" h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-between">
       
            </div>
        </div>
    )
}

export default Gallery

export const getStaticProps = async ()  => {
    const url =`https://graph.instagram.com/me/media?fields=id,caption&access_token=
    =${process.env.IG_SECRET}`

    const data = await fetch(url)
    const feed = await data.json()
    console.log(feed)
}