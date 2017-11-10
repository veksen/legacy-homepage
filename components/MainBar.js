import styled from 'styled-components'

const MainBarWrapper = styled.div`
  background: #39a769;
  margin-top: 100px;
  outline: 1px dashed #39a769;
  outline-offset: 3px;
`
const MainBarImage = styled.img`
  display: block;
  margin-left: 40px;
  width: 300px;
`

export default () => {
  return (
    <MainBarWrapper className="main-bar">
      <MainBarImage className="main-bar__img" src="/static/img/jp.png" />
    </MainBarWrapper>
  )
}
