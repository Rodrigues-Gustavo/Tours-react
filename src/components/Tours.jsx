import Tour from './Tour'

const Tours = ({ tours }) => {
  return (
    <section>
      <div>
        <h2>Tours</h2>
        <div>---------</div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} />
        })}
      </div>
    </section>
  )
}

export default Tours