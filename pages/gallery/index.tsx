import { AnyRecord } from "dns"
import { NextPage } from "next"
import Image from "next/image"


const Gallery: NextPage = ({ feed }: any) => {
    const images = feed.data
    
    return (

        <div className="w-screen py-12 flex justify-center bg-black font-avenir">
            <div className=" h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 sm:justify-between z-3">
                {images.map((image: any) =>
                    
                        <div key={image.id} className="w-full h-full relative bg-inherit invert">
                            {/* <img src={image.media_url} alt={image.caption} /> */}
                            <div className="w-screen h-[40vh]"/>
                            <Image src={"/inserthere.png"} alt='Your image here' fill/>
                            
                        </div>
)}
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