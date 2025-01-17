import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import ShowAll from "../components/showAll"
import Shuffle from "../components/shuffle"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`jam`, `challenge`, `generator`]} />
    <p>Challenge My Beat is a dawless music production challenge.
    Choose a music genre and a theme/ambiance randomly and do your best with your machines to kill the challenge.
    </p>
    <h3>Challenge My Beat Generator</h3>
    <p>
    {/* Welcome in the Challenge My Beat Genreator. */}
    {/* You can here add some new entries or just generate a new challenge with the existing entries. Enjoy! */}
    To generate a new challenge, just click on the "Randomize" button!
    </p>
    <div>
      <Shuffle />
      <ShowAll />
      {/* <Image /> */}
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)



export default IndexPage
