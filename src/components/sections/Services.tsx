import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph"
import { Title } from "../shared/Title"
import { Service } from "../cards/Service"
import { services } from "../../utilities/services-data"


export const Services = () => {
  return (
  <section id="services"> 
    <Container className="space-y-10 md:space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Title> My Services</Title>
        <Paragraph>
          I use the power of <span className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#41C6EE] to-[#3802E9]">HighLevel</span> to build a single, central hub that runs the operational side of your business, so you can finally focus on the work you love. My services include:
        </Paragraph>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, key) => (
          <Service
          key={key} 
          title={service.title} 
          description={service.description} 
          icon={service.icon} />
        ))}
      </div>
    </Container>
  </section>
  )
}