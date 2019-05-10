import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
)

return (
  <>
    <Header siteTitle={site.siteMetadata.title} />
    <div>
      <main>{children}</main>
    </div>
  </>
)
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
