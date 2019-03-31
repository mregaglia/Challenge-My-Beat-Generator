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
              ambiance
            }
          }
        }
        }
        `}
        render={data => (
            <div className="columns">
              <div className="column">
                  <h4>Genre : </h4>
                  <ul>
                      {data.allDataJson.edges[0].node.genre.map((x, index)=><li key={index}>{x}</li>)}
                  </ul>
              </div>

              <div className="column">
                  <h4>Ambiance : </h4>
                  <ul>
                      {data.allDataJson.edges[0].node.ambiance.map((x, index)=><li key={index}>{x}</li>)}
                  </ul>
              </div>
            </div>
        )}
    />
);



export default Generator
