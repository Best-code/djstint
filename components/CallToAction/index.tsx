import { Parallax } from "react-scroll-parallax"
import { mailto } from "../MailTo"

export default function CallToAction() {
  return (
    <Parallax className="w-full flex justify-center" speed={10}>
      <div className="w-full flex max-w-7xl flex-col py-24 px-4 sm:px-6 lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl sm:text-4xl hover:text-5xl transition-all flex flex-col text-center font-bold tracking-tight text-dark">
          <span className="pt-12 sm:pt-0">Ready to dive in?</span>
          <span className="text-dark">Schedule your tint today.</span>
        </h2>
        <div className="mt-4 lg:flex-shrink-0 w-full">
          <div className="rounded-md flex w-full justify-center">
            <a
              href={mailto}
              className=" items-center justify-center rounded-md border border-transparent bg-dark px-5 hover:px-7 py-3 hover:py-4 transition-all text-base font-medium text-white hover:bg-black"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </Parallax>
  )
}