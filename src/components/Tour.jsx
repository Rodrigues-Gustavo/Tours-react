import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.article`
  background: #fff;
  border-radius: 0.25rem;
  margin: 2rem 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s linear;
  &:hover {
    box-shadow: var(--dark-shadow);
  }

  img {
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-top-right-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
  }

  footer {
  padding: 1.5rem 2rem;
  }
`


const Tour = ({ tour, removeTour }) => {
  const { id, image, info, name, price } = tour
  const [readMore, setReadMore] = useState(false)

  return (
    <Container>
      <img src={image} alt={name} />
      <footer>
        <div>
          <h3>{name}</h3>
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
    </Container>
  )
}

export default Tour