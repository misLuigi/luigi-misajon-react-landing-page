import { Button } from "../shared/Button"
import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph"

export const CTA = () => {
  return (
  <section className="pb-20 relative"> 
    <Container>
      <div className="relative rounded-2xl overflow-hidden">
        <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-1- px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1"> Quickly Scale Up <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#41C6EE] to-[#3802E9]"> Your Business </span>with <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#41C6EE] to-[#3802E9]">AI</span></h1>
          <Paragraph className="pt-10 mt-2">
            Prevent the burnout and start automating your system. You did not start your business to own a job. Let me help you streamline your workflow and you focus on running your business like a you always wanted.
          </Paragraph>
          <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-[#DFF5FC]">
            <Button className="text-[#DFF5FC] bg-gradient-to-b from-[#3802E9] to-[#41C6EE] font-semibold transition-all duration-300 transform hover:scale-105 border-none"> Get In Touch </Button>
          </div>
        </div>
      </div>
    </Container>
  </section>)
}