import SocialLink from './SocialLink'

export default () => {
  return (
    <div className="social">
      <style scoped jsx>{`
        .social {
          display: flex;
        }
      `}</style>

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

    </div>
  )
}
