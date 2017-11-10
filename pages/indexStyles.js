import styled from 'styled-components'

export const P = styled.p`
  margin: 0;

  & + & {
    margin-top: 1em;
  }
`

export const Main = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
`

export const Side = styled.div`
  flex: 0 1 50px;
  background-color: #eee;
  background: linear-gradient(86deg, rgba(255, 255, 255, 0.5), rgba(204, 204, 204, 0.5)), url(/static/img/cream_pixels.png);
`

export const Content = styled.div`
  flex: 1 1 auto;
  overflow-y: hidden;
  font-size: 24px;
  overflow-x: hidden;
  overflow-y: scroll;
`

export const ContentInner = styled.div`
  padding: 50px;
`

export default `
  html,
  body,
  body > div:first-child,
  #__next,
  #__next > div:first-child {
    height: 100%;
  }

  body {
    background: #fff;
    margin: 0;
    color: #fff;
    color: #555;
    font-family: Arial, sans-serif;
    line-height: 1.42;
  }
`
