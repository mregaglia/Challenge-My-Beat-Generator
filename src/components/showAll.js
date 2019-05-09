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
          <div className="columns">
            <div className="column">
                <div className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                      <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <h4>All Genre <FaAngleDown /></h4>
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

            <div className="column">
                <div className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                      <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <h4>All Ambiance <FaAngleDown /></h4>
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
