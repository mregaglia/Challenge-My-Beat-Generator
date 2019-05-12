import React from "react"
import { useStaticQuery, graphql} from 'gatsby'
import "./layout.scss"
import { FaAngleDown } from 'react-icons/fa';

const showAll = () => {
  const data = useStaticQuery( 
    graphql`
      query {
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
    `
  )

  return (
          <div className="level">
            <div className="level-item has-text-centered">
                <div className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                      <button className="button AllItems is-primary" aria-haspopup="true" aria-controls="dropdown-menu">
                        <p>All Genre <FaAngleDown /></p>
                      </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <div className="dropdown-item">
                          <ul>
                              {data.allDataJson.edges[0].node.genre.map((x, index)=><li key={index}>{x}</li>)}
                          </ul>
                        </div>
                      </div>
                    </div>
                </div>
            </div>

            <div className="level-item has-text-centered">
                <div className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                      <button className="button AllItems is-primary" aria-haspopup="true" aria-controls="dropdown-menu">
                        <p>All Ambiance <FaAngleDown /></p>
                      </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <div className="dropdown-item">
                          <ul>
                              {data.allDataJson.edges[0].node.ambiance.map((x, index)=><li key={index}>{x}</li>)}
                          </ul>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
  )
}



export default showAll
