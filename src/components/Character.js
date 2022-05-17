const Character = (character) => {
  return (
    <>
      <div className="col-3 m-2">
        <div className="card p-2">
          <h3 className="card-title">{ character.name }</h3>
          <img
            src={character.image}
            width="300"
            className="card-img-top"
          />
          <p>{ `Origin : ${ character.origin && character.origin} `}</p>
        </div>
      </div>
    </>
  )
}

export default Character
