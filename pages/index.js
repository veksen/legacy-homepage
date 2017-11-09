import MainBar from '../components/MainBar'
import Section from '../components/Section'
import Social from '../components/Social'
import globalStyles from './indexStyles'

export default () => {
  return (
    <div className="main">

      <style jsx global>{globalStyles}</style>

      <div className="side"></div>

      <div className="content">

        <MainBar />

        <div className="content-inner">

          <Section>

            <p>Hey there! I'm <strong>Jean-Philippe Sirois</strong>, a full-stack web developer based in the beautiful Montreal, Canada.</p>

            <p>My hobbies and interests include mountain biking, snowboarding, photography, and design.</p>

          </Section>

          <Section>

            <h2>Stalk me!</h2>

            <Social />

          </Section>
        </div>
      </div>

    </div>
  )
}
