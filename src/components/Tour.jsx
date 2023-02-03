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
          {readMore ? info : `${info.substring(0, 200)}...`}{''}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}{''}
          </button>
        </p>
        <button onClick={() => removeTours(id)}>Delete</button>
      </footer>
    </article>
  )
}

export default Tour