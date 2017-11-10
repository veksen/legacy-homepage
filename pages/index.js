import MainBar from '../components/MainBar'
import Section from '../components/Section'
import Social from '../components/Social'
import globalStyles, { P, Main, Side, Content, ContentInner } from './indexStyles'

export default () => {
  return (
    <Main>

      <style jsx global>{globalStyles}</style>

      <Side />

      <Content>

        <MainBar />

        <ContentInner>

          <Section>

            <P>Hey there! I'm <strong>Jean-Philippe Sirois</strong>, a full-stack web developer based in the beautiful Montreal, Canada.</P>

            <P>My hobbies and interests include mountain biking, snowboarding, photography, and design.</P>

          </Section>

          <Section>

            <h2>Stalk me!</h2>

            <Social />

          </Section>

        </ContentInner>

      </Content>

    </Main>
  )
}
