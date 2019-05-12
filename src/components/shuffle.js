import React, { useState } from "react"
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
    const [items, setItems] = useState([]);

    return (
    <div>

    <button className="button is-warning randomize is-fullwidth"  onClick={() => setItems([ "-->  ", getRandArrayItem(AllGenre), " / ", getRandArrayItem(AllAmbiance), "  <--" ])}>Randomize</button>
    <br/>
    <div className="result level-item has-text-centered"><p>{items}</p></div>

    </div>
    )
}

export default Shuffle