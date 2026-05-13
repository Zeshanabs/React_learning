import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <div className="space-y-10">
      <Hero
        eyebrow="Contact"
        heading="Reach out and start planning your next trip."
        description="Our booking team is ready to answer questions, craft custom itineraries, and help you choose the perfect destination."
        primaryLabel="Send a request"
        primaryLink="#contact-form"
        secondaryLabel="Learn more"
        secondaryLink="/about"
        panelTitle="Contact support"
        panelBadge="Fast reply"
        panelDescription="Fill the form and we will respond quickly with a personalized plan."
        stats={[
          { label: 'Response', value: 'Within 24h' },
          { label: 'Support', value: '24/7' },
          { label: 'Consulting', value: 'Free' },
        ]}
      />
      <div id="contact-form">
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
