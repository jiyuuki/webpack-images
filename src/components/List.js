import Character from "./Character"
import { useState, useEffect } from "react"

const List = () => {
  const [loading, setLoading] = useState(true)
  const [characters, setCharacters] = useState([])

  const fetchData = async () => {
    try {

      const data = await fetch(
        'https://rickandmortyapi.com/api/character'
      )
      const { results } = await data.json()
      setCharacters(results)
      setLoading(false)
    } catch {
      console.log('error')
    }

  }

  useEffect(() => {
    fetchData()
    console.log({ characters })
  }, [characters.length])

  return (
    <>
      <h2>List of characters</h2>
      <div className="row">
        { loading ? <h1>Loading</h1> : (
          characters.map((character) => (
            <Character
              key={character.id}
              name={character.name}
              origin={character.origin.name}
              image={character.image}
              // {...character}
            />
          ))
        )}
      </div>
    </>
  )
}

export default List
