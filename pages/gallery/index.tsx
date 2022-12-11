import { AnyRecord } from "dns"
import { NextPage } from "next"
import Image from "next/image"

const Gallery: NextPage = ({ feed }: any) => {
    const images = feed.data
    return (

        <div className="w-screen py-12 flex justify-center bg-black font-avenir">
            <div className=" h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-8 sm:justify-between">
                {images.map((image: any) =>
                    [
                        <div key={image.id}>
                            <img src={image.media_url} alt={image.caption} />
                            
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