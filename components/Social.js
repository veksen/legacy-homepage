import SocialLink from './SocialLink'
import styled from 'styled-components'

const SocialWrapper = styled.div`
  display: flex;
`

export default () => {
  return (
    <SocialWrapper className="social">

      <SocialLink
        name="GitHub"
        username="veksen"
      />

      <SocialLink
        name="Twitter"
        username="veksenn"
      />

      <SocialLink
        name="Stackoverflow"
        username="1732521/veksen"
      />

      <SocialLink
        name="LinkedIn"
        username="jean-philippe-sirois-lamarche-14789269"
      />

      <SocialLink
        name="Facebook"
        username="jpslx"
      />

    </SocialWrapper>
  )
}
