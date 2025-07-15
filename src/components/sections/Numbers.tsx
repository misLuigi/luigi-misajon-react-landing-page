import { Container } from "../shared/Container"

export const Numbers = () => {
  return <section className="relative mt-12 md:mt-16">
    <Container className="flex justify-center align-center">
      <div className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg
                        border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border
                        grid grid-cols-2 md:grid-cols-4 transition-all duration-300 transform hover:scale-105 hover:text-[#02B3E9]"
      >
        <div className="text-center px-5 transition-all duration-300 transform hover:scale-105 hover:text-[#3802E9]">
          <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-transparent bg-clip-text bg-[#41C6EE]"> 20+ </h2>
          <p className="mt-2 text-heading-3"> Automation Setup</p>
        </div>
        <div className="text-center px-5 transition-all duration-300 transform hover:scale-105 hover:text-[#3802E9]">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-transparent bg-clip-text bg-[#41C6EE]"> 118+ </h2>
            <p className="mt-2 text-heading-3"> Businesses Helped</p>
          </div>
          <div className="text-center px-5 transition-all duration-300 transform hover:scale-105 hover:text-[#3802E9]">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-transparent bg-clip-text bg-[#41C6EE]"> 99.9% </h2>
            <p className="mt-2 text-heading-3"> Automation Uptime</p>
          </div>
          <div className="text-center px-5 transition-all duration-300 transform hover:scale-105 hover:text-[#3802E9]">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-transparent bg-clip-text bg-[#41C6EE]"> No. 1 </h2>
            <p className="mt-2 text-heading-3"> CRM Software</p>
          </div>
      </div>
    </Container>
  </section>
}