import { createGlobalStyle } from "styled-components"

import WavehausExtraBold from "./Wavehaus-158ExtraBold.woff2"
import WavehausBold from "./Wavehaus-128Bold.woff2"
import WavehausSemiBold from "./Wavehaus-95SemiBold.woff2"
import WavehausRegular from "./Wavehaus-66Book.woff2"
import WavehausLight from "./Wavehaus-42Light.woff2"
import WavehausThin from "./Wavehaus-28Thin.woff2"

export default createGlobalStyle`
  @font-face {
    font-family: 'Wavehaus';
    src: url(${WavehausExtraBold}) format('woff2');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Wavehaus';
    src: url(${WavehausBold}) format('woff2');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Wavehaus';
    src: url(${WavehausSemiBold}) format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Wavehaus';
    src: url(${WavehausRegular}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Wavehaus';
    src: url(${WavehausLight}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Wavehaus';
    src: url(${WavehausThin}) format('woff2');
    font-weight: 100;
    font-style: normal;
  }
`
