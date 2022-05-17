const Character = (character) => {
  return (
    <>
      <h3>{ character.name }</h3>
      <img
        src={character.image}
        width="300"
      />
      <p>{ `Origin : ${ character.origin && character.origin} `}</p>
    </>
  )
}

export default Character
