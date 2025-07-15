import { ButtonLink } from "../shared/ButtonLink"
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
        <div className="mt-10 w-full flex justify-center max-w-md mx-auto lg:mx-0 gap-4">
              <span className="min-w-max pr-2 border-r border-box-border my-auto text-[#3802E9]">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="#41C6EE" 
                  stroke="#3802E9" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  className="lucide lucide-calendar-icon lucide-calendar">
                    <path d="M8 2v4"/><path d="M16 2v4"/>
                    <rect width="18" height="18" x="3" y="4" rx="2"/>
                    <path d="M3 10h18"/>
                </svg>
              </span>
              <ButtonLink text="Book A Free Strategy Call Now" href="https://api.leadconnectorhq.com/widget/booking/QEeSb9cOesZn5Ia2Q89P" className="transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-bl" />
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