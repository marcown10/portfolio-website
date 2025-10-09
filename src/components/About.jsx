import styled from 'styled-components'

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: #ffffff;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Title>About Me</Title>
        <Content>
          <p>
            I am a passionate full-stack developer with expertise in modern web technologies.
            My focus is on creating efficient, scalable, and user-friendly applications
            that solve real-world problems.
          </p>
        </Content>
      </Container>
    </AboutSection>
  )
}

export default About
