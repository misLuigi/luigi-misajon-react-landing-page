import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph"
import { Title } from "../shared/Title"
import { Info } from "../cards/Info"

export const AboutUs = () => {
  return (<section id="about-us"> 
    <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
      <div className="w-full md:w-5/12 lg:w-1/2">
        <div className="w-full h-80 sm:h-120 relative">
          <img 
          src="https://images.pexels.com/photos/8728381/pexels-photo-8728381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
          alt="A picture of the business owner." />
        </div>
      </div>

      <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
        <Title> Luigi <span className="font-light"> Website & Automation </span></Title>
        <Paragraph className="mt-5"> Hi! I'm <span className="font-semibold text-transparent bg-clip-text bg-[#02B3E9]">Luigi Misajon</span>, and I know the cycle of being the CEO, the marketer, the sales team, the admin, and the one who actually does the client work, because I've lived it. </Paragraph>
        <Paragraph className="mt-3"> My business was founded on a simple, revolutionary belief: Technology should be our leverage, not our limitation. </Paragraph>
        <Paragraph className="mt-5 text-heading-3"> If you're ready to get out of the weeds and back to building your empire, you're in the right place. Let's get to work. </Paragraph>
        <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          
          <Info title="Mission" description="To install automated systems and smart workflows that big companies use. I don't just build websites; I build smart websites, client-attracting funnels, automated follow-ups, and central CRM systems that make sure profitability.">
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
              className="lucide lucide-target-icon lucide-target">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
            </svg>
          </Info>

          <Info title="Vision" description="A future where your income isn't tied to your hours. A future where you can focus on being the visionary, the creator, and the expert, while your systems handle the heavy lifting of attracting and nurturing clients.">
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
            className="lucide lucide-rocket-icon lucide-rocket">
              
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
            </svg>
          </Info>
        </div>
      </div>
    </Container></section>)
}