import styled, { css, keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

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
  ${css`animation: ${fadeIn} 1s ease-out;`}
`

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #4a90e2, #63b3ed);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Subtitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: 2rem;
  color: #9ca3af;
`

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
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

const RedButton = styled(Button)`
  background: #dc3545;

  &:hover {
    background: #c82333;
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
        <ButtonContainer>
          <Button href="#contact">Get in Touch</Button>
          <RedButton href="#projects">View Projects</RedButton>
        </ButtonContainer>
      </Content>
    </HeroSection>
  )
}

export default Hero
