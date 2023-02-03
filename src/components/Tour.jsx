const Tour = ({ tour }) => {
  const { id, image, info, name, price } = tour

  return (
    <article>
      <img src={image} alt={name} />
      <footer>
        <div>
          <h4>{name}</h4>
          <h4>$ {price}</h4>
        </div>
        <p>
          {info}
        </p>
        <button onClick={() => removeTours(id)}>Delete</button>
      </footer>
    </article>
  )
}

export default Tour