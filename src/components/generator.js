import React from "react"
import { StaticQuery, graphql} from 'gatsby'

const Generator = () => (
    <StaticQuery
        query={graphql`
        query MyJsonQuery {
          allDataJson {
          edges {
            node {
              id
              genre
            }
          }
        }
        }
        `}
        render={data => (
            <>
                {data.allDataJson.edges[0].node.genre.map(x=><li>{x}</li>)}
            </>
        )}
    />
);



export default Generator
