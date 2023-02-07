import Tour from './Tour'
import styled from 'styled-components'
import Headers from './Headers'

const Container = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

const Tours = ({ tours, removeTour }) => {
  return (
    <Container>
      <Header>
        <Headers>
          <h2>Best places to visit!</h2>
        </Headers>
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