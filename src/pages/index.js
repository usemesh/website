import React from "react"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import logo from "../images/logo.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Mesh" keywords={["mesh"]} />
    <Wrapper>
      <Logo src={logo} alt="Mesh" />
      <SubHeading>Coming soon</SubHeading>
      <MoreInfo href="mailto:hello@usemesh.net">hello@usemesh.net</MoreInfo>
    </Wrapper>
  </Layout>
)

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`

const Logo = styled.img`
  max-width: 500px;
  object-fit: contain;

  margin: 70px 0 100px;

  @media only screen and (max-width: 768px) {
    max-width: 50%;
    margin: 10px 0 50px;
  }

  @media only screen and (max-width: 480px) {
    max-width: 75%;
    margin: 10px 0 50px;
  }
`

const SubHeading = styled.h3`
  font-size: 35px;
  font-weight: 700;

  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 20px;
  }
`

const MoreInfo = styled.a`
  color: #7493f2;
  font-size: 25px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`

export default IndexPage
