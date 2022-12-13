import { RoundaboutLeft } from "@mui/icons-material"
import { AnyRecord } from "dns"
import { NextPage } from "next"
import Image from "next/image"

const Gallery: NextPage = ({ feed }: any) => {
    const images = feed.data

    const percentageOfFeed = 10
    const postCount = Object.keys(images).length
    const restrictedImages = [...Array(Math.round(postCount/percentageOfFeed))] 

    const displayEntireFeed = true
    return (

        <div className="w-screen py-12 flex justify-center bg-gradient-to-b from-black via-dark to-light font-avenir">
            <div className=" h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-8 sm:justify-between">
                {displayEntireFeed && images.map((image: any) =>
                    [
                        <div key={image.id}>
                            <img src={image.media_url} className="hover:scale-125 transition duration-100 hover:z-10 z-0" alt={image.caption} /> 
                        </div>
                    ])}
                   {!displayEntireFeed && restrictedImages.map((_,i)=>
                    [
                        <div key={images[i].id}>
                            <img src={images[i].media_url} className="hover:scale-125 scale-100 duration-100" alt={images[i].caption} /> 
                        </div>
                    ])} 
            </div>
        </div>
    )
}

export default Gallery

export const getStaticProps = async () => {

    const url = `https://graph.instagram.com/me/media?fields=id,media_url,media_type,permalink,caption&access_token=${process.env.IG_TOKEN}`

    console.log(url)

    const data = await fetch(url)
    const feed = await data.json()

    return {
        props: {
            feed
        }
    }
}