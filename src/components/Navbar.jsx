import styled from 'styled-components'
import { motion } from 'framer-motion'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  z-index: 1000;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.a`
  color: #64ffda;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`

const NavLink = styled(motion.a)`
  color: #ccd6f6;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: #64ffda;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Logo href="#">OWNET</Logo>
        <NavLinks>
          <NavLink 
            href="#about"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            About
          </NavLink>
          <NavLink 
            href="#skills"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Skills
          </NavLink>
          <NavLink 
            href="#projects"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Projects
          </NavLink>
          <NavLink 
            href="#contact"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Contact
          </NavLink>
        </NavLinks>
      </Container>
    </Nav>
  )
}

export default Navbar
