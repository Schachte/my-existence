import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"


const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const HeaderSpan = styled.span`
  font-size: 40px;
  font-family: 'Source Sans Pro';
  font-weight: 700;
  letter-spacing: -3px;
`

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "Inconsolata",
}

// markup
const NotFoundPage = () => {
  return (
    <ContainerDiv>
      <HeaderSpan>404 NOT FOUND</HeaderSpan>
      <main style={pageStyles}>
          Sorry, I never actually made this page.. Maybe try <Link to="/">going back home...</Link>.
          <span role="img" aria-label="Pensive emoji">
            😔
          </span><br/>{"- Ryan Schachte"}
          <br />
      </main>
    </ContainerDiv>
  )
}

export default NotFoundPage
