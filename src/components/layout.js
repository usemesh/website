/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import styled, { createGlobalStyle, css } from "styled-components"
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
    font-family: "Wavehaus", "Avenir Next", Avenir, sans-serif;
    background-color: #FFFBF0;
    color: #302B2B;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  min-height: 700px;
  height: 100vh;

  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    min-height: 400px;
  }

  @media only screen and (max-width: 480px) {
    min-height: 300px;
  }
`

const ContainerWidth = css`
  width: 1000px;

  @media only screen and (max-width: 1100px) {
    width: 768px;
  }

  @media only screen and (max-width: 768px) {
    width: calc(100% - 20px);
  }
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${ContainerWidth}
`

const Footer = styled.footer`
  margin-bottom: 10px;

  font-size: 14px;

  ${ContainerWidth}
`

export default Layout
