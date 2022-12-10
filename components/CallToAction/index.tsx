import { Parallax } from "react-scroll-parallax"

export default function CallToAction() {
    return (
      <div className="bg-gradient-to-b from-gray to-white">
        <Parallax  speed={10}>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-dark">Schedule your tint today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-dark px-5 py-3 text-base font-medium text-white hover:bg-offwhite hover:text-dark"
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