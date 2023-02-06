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

const TourInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h3 {
    margin-bottom: 0;
  }

  h4 {
    color: hsl(205, 78%, 60%);
    background: hsl(205, 100%, 96%);
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }

  p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-5);
}
`

const Button = styled.button`
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  color:  hsl(205, 78%, 60%);
  font-size: 1rem;
  cursor: pointer;
  padding-left: 0.25rem;
`

const DeleteButton = styled.button`
  display: block;
  width: 200px;
  margin: 1rem auto 0 auto;
  color: hsl(360, 67%, 44%);
  letter-spacing: 0.1rem;
  background: transparent;
  border: 1px solid hsl(360, 67%, 44%);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;

  &:hover {
    color: #fff;
    background-color:  hsl(360, 67%, 44%);
  }
`

const Tour = ({ tour, removeTour }) => {
  const { id, image, info, name, price } = tour
  const [readMore, setReadMore] = useState(false)

  return (
    <Container>
      <img src={image} alt={name} />
      <footer>
        <TourInfo>
          <h3>{name}</h3>
          <h4>$ {price}</h4>
        </TourInfo>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}{''}
          <Button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}{''}
          </Button>
        </p>
        <DeleteButton onClick={() => removeTour(id)}>Delete</DeleteButton>
      </footer>
    </Container>
  )
}

export default Tour