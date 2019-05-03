import React from "react"
import { StaticQuery, graphql} from 'gatsby'
import "./layout.scss"
import { FaAngleDown } from 'react-icons/fa';



const showAll = () => (
    // <StaticQuery
    //     query={graphql`
    //     query MyJsonQuery {
    //       allDataJson {
    //       edges {
    //         node {
    //           id
    //           genre
    //           ambiance
    //         }
    //       }
    //     }
    //     }
    //     `}
    //     render={data => (
    //         <div className="columns">
    //           <div className="column">
    //               <h4>Genre : </h4>
    //               <ul>
    //                   {data.allDataJson.edges[0].node.genre.map((x, index)=><li key={index}>{x}</li>)}
    //               </ul>
    //           </div>

    //           <div className="column">
    //               <h4>Ambiance : </h4>
    //               <ul>
    //                   {data.allDataJson.edges[0].node.ambiance.map((x, index)=><li key={index}>{x}</li>)}
    //               </ul>
    //           </div>
    //         </div>
    //     )}
    // />


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
              <div className="dropdown is-hoverable">
                  <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                      <h4>Genre <FaAngleDown /></h4>
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
                      <h4>Ambiance <FaAngleDown /></h4>
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
    )}
/>


);



export default showAll
