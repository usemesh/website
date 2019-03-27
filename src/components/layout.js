/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Fonts from "../fonts"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <GlobalStyle />
        <Fonts />
        <Main>{children}</Main>
        <Footer>© {new Date().getFullYear()}, Mesh Technologies Limited</Footer>
      </Wrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const GlobalStyle = createGlobalStyle`
  html {
    font-family: "Avenir Next", Avenir, sans-serif;
    color: #ffffff;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background: linear-gradient(#419799, #175358);
  }
`

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  height: 100vh;

  align-items: center;
  justify-content: center;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;

  align-items: center;
  justify-content: center;
`

const Footer = styled.footer`
  margin-bottom: 10px;

  font-size: 18px;

  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`

export default Layout
