import React from "react"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="MESH" keywords={["mesh"]} />
    <Logo>MESH</Logo>
    <SubHeading>Coming soon</SubHeading>
    <MoreInfo href="mailto:hello@usemesh.net">hello@usemesh.net</MoreInfo>
  </Layout>
)

const Logo = styled.h1`
  font-size: 150px;
  font-weight: 600;

  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`

const SubHeading = styled.h3`
  font-size: 30px;
  font-weight: 600;

  @media only screen and (max-width: 480px) {
    font-size: 20px;
  }
`

const MoreInfo = styled.a`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`

export default IndexPage
