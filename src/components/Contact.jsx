import styled from 'styled-components'

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: #2a2a2a;
  color: white;
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Input = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }
`

const TextArea = styled.textarea`
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #357abd;
  }
`

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic here
  }

  return (
    <ContactSection id="contact">
      <Container>
        <Title>Get in Touch</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Name" required />
          <Input type="email" placeholder="Email" required />
          <TextArea placeholder="Your message" required />
          <Button type="submit">Send Message</Button>
        </Form>
      </Container>
    </ContactSection>
  )
}

export default Contact
