import { Button } from "../shared/Button"
import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph"
import { Numbers } from "./Numbers"

export const Hero = () => {
  return <section className="relative pt-32 lg:pt-36">
    <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
      <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
        <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 
                      skew-x-12 rounded-3xl bg-gradient-to-r from-[#3802E9] to-[#02B3E9]
                      blur-xl opacity-60 lg:opacity-95 lg:block hidden"
        >

        </span>
        <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
      </div>

      <div className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
        <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
          Empower Your Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#41C6EE] to-[#3802E9] ml-2"> with AI</span> and<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3802E9] to-[#41C6EE] ml-2"> Automation.</span>
        </h1>
         <Paragraph className="mt-8 font-extrabold">
          Give Your Business an Automated Brain
        </Paragraph>
        <Paragraph className="mt-8">
          I help driven freelance professionals and small business owners replace chaotic task redundancy with automated systems. Get back your time, reclaim your focus, and build a business that works for you, not the other way around.
        </Paragraph>
        <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0 gap-4 transition-all duration-300 transform hover:scale-105">
              {/* get email or embed a form from GHL */}
              <span className="min-w-max pr-2 border-r border-box-border my-auto text-[#3802E9]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    fill="#41C6EE"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3802E9"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                    />
                  </svg>
              </span>
              <Button className="min-w-max text-[#DFF5FC] transition-all duration-300 transform hover:scale-105">
                <span className="relative z-[5]">Sign-up To My Newsletter</span>
              </Button>
        </div>
      </div>

      <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:max-0 mx-auto max-w-3xl">
        <img src="/Temp-img.jpg" 
        alt="Hero image." 
        width={2350}
        height={2359}
        className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96" />
      </div>
    </Container>
    <Numbers />
  </section>
}