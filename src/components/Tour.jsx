import { useState } from 'react'

const Tour = ({ tour, removeTour }) => {
  const { id, image, info, name, price } = tour
  const [readMore, setReadMore] = useState(false)

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
        <button onClick={() => removeTour(id)}>Delete</button>
      </footer>
    </article>
  )
}

export default Tour