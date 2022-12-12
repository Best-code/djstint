import { NextPage } from "next"
import { AboutContent } from "../../components/AboutContent"

const About: NextPage = () => {
  return (
        <div className="w-screen py-12 flex justify-center bg-gradient-to-b from-black via-dark to-light font-avenir">
    <AboutContent/>
    </div>
  )
}

export default About