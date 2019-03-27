import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Generator from "../components/generator"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`jam`, `challenge`, `generator`]} />
    <h1>Challenge My Beat Generator</h1>
    <p>Welcome in the Challenge My Beat Genreator.
    You can add some new entries or just generate a new challenge with the existing entries. Enjoy!
    </p>
    <p>Challenge My Beat is a dawless music production challenge.
Choose a music genre and a theme/ambiance randomly and do your shit with your machine to kill the challenge.
</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Generator />
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
