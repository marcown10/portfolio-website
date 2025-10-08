import styled from 'styled-components'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  padding: 2rem;
`

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  color: white;
`

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #4a90e2, #63b3ed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #9ca3af;
`

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
`

const Button = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: #4a90e2;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`

const Hero = () => {
  return (
    <HeroSection>
      <Content>
        <Title>Full Stack Developer</Title>
        <Subtitle>Building modern web applications</Subtitle>
        <Description>
          I specialize in creating robust and scalable applications using React, Node.js, 
          and modern web technologies. Let's build something amazing together.
        </Description>
        <Button href="#contact">Get in Touch</Button>
      </Content>
    </HeroSection>
  )
}

export default Hero
