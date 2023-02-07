import Tour from './Tour'
import styled from 'styled-components'

const Container = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  div {
    display: block;
    width: 300px;
    margin: 1rem auto 0 auto;
    color: hsl(205, 78%, 60%);
    letter-spacing: 0.1rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
`

const Tours = ({ tours, removeTour }) => {
  return (
    <Container>
      <Header>
      <div>
          <h2>Best places to visit!</h2>
          </div>
      </Header>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour}  removeTour={removeTour} />
        })}
      </div>
    </Container>
  )
}

export default Tours