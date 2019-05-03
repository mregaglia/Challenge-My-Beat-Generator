import React,  { Component } from "react"
// import { StaticQuery, graphql} from 'gatsby'
import "./layout.scss"


    // <StaticQuery
    //     query={graphql`
    //     query MyJsonShuffleQuery {
    //       allDataJson {
    //         edges {
    //             node {
    //                 id
    //                 genre
    //                 ambiance
    //             }
    //         }
    //       }
    //     }
    //     `
    //     }
    // />

const allGenre = ({data}) => (
    <>
    {data.allDataJson.edges[0].node.genre}
    </>
)

class Shuffle extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render(){

    }
}

export default Shuffle;

// const shuffle = () => (
//     <StaticQuery
//         query={graphql`
//         query MyJsonShuffleQuery {
//           allDataJson {
//           edges {
//             node {
//               id
//               genre
//               ambiance
//             }
//           }
//         }
//         }
//         `}
//         render={data => (
//             <div className="columns">
//               <div className="column">
//                   <h4>Genre : </h4>
//                   <ul>
//                       {data.allDataJson.edges[0].node.genre.map((x, index)=><li key={index}>{x}</li>)}
//                   </ul>
//               </div>

//               <div className="column">
//                   <h4>Ambiance : </h4>
//                   <ul>
//                       {data.allDataJson.edges[0].node.ambiance.map((x, index)=><li key={index}>{x}</li>)}
//                   </ul>
//               </div>
//             </div>
//         )}
//     />