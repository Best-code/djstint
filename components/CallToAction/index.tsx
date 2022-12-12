import { Parallax } from "react-scroll-parallax"
import { mailto } from "../MailTo"

export default function CallToAction() {
    return (
      <div className="bg-inherit">
        <Parallax className="flex" speed={10}>
        <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            <span className="block pt-12 sm:pt-0">Ready to dive in?</span>
            <span className="block text-dark">Schedule your tint today.</span>
          </h2>
          <div className="mt-4 lg:mt-0 lg:flex-shrink-0">
            <div className="rounded-md flex w-full ">
              <a
                href={mailto}
                className=" items-center justify-center rounded-md border border-transparent bg-dark px-5 py-3 text-base font-medium text-white hover:bg-black"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        </Parallax>
      </div>
    )
  }