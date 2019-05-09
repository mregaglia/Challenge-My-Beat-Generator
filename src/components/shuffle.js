import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.scss"

const Shuffle = () => {
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

const getRandArrayItem = (arr) => arr[ Math.floor(Math.random() * arr.length) ]
const AllGenre = data.allDataJson.edges[0].node.genre
const AllAmbiance = data.allDataJson.edges[0].node.ambiance

    return (
    <div className="columns">
        <div className="column">
        <p>{getRandArrayItem(AllGenre)}</p>
        </div>
        <div className="column">
        <p>{getRandArrayItem(AllAmbiance)}</p>
        </div>
    </div>
    )
}

export default Shuffle