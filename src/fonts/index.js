import { createGlobalStyle } from "styled-components"

import AvenirNextRegular from "./2cd55546-ec00-4af9-aeca-4a3cd186da53.woff2"
import AvenirNextMedium from "./627fbb5a-3bae-4cd9-b617-2f923e29d55e.woff2"
import AvenirNextDemi from "./aad99a1f-7917-4dd6-bbb5-b07cedbff64f.woff2"
import AvenirNextBold from "./14c73713-e4df-4dba-933b-057feeac8dd1.woff2"

import AvenirNextRegularWoff from "./1e9892c0-6927-4412-9874-1b82801ba47a.woff"
import AvenirNextMediumWoff from "./f26faddb-86cc-4477-a253-1e1287684336.woff"
import AvenirNextDemiWoff from "./91b50bbb-9aa1-4d54-9159-ec6f19d14a7c.woff"
import AvenirNextBoldWoff from "./b8e906a1-f5e8-4bf1-8e80-82c646ca4d5f.woff"

export default createGlobalStyle`
  @font-face {
    font-family: "Avenir Next";
    src: url(${AvenirNextRegular}) format("woff2"), url(${AvenirNextRegularWoff}) format("woff");
    font-weight: 400;
  }

  @font-face {
    font-family: "Avenir Next";
    src: url(${AvenirNextMedium}) format("woff2"), url(${AvenirNextMediumWoff}) format("woff");
    font-weight: 500;
  }

  @font-face {
    font-family: "Avenir Next";
    src: url(${AvenirNextDemi}) format("woff2"), url(${AvenirNextDemiWoff}) format("woff");
    font-weight: 600;
  }

  @font-face {
    font-family: "Avenir Next";
    src: url(${AvenirNextBold}) format("woff2"), url(${AvenirNextBoldWoff}) format("woff");
    font-weight: 700;
  }
`
