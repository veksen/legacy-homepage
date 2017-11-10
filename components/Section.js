import styled from 'styled-components'

const SectionWrapper = styled.div`
  & + & {
    margin-top: 100px;
  }
`

export default ({ children }) => {
  return (
    <SectionWrapper className="section">

      {children}

    </SectionWrapper>
  )
}
