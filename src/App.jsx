import { useState, useEffect } from "react"
import Tours from "./components/Tours";

const URL = 'https://course-api.com/react-tours-project'

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(URL)
      const data = await response.json()

      setLoading(false)
      setTours(data)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    
    setLoading(false)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <h2>Loading</h2>
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <h2>Please, click the button to refresh the page!</h2>
        <button onClick={() => fetchTours()}>Refresh</button>
      </main>
    )
  }

  return <main><Tours tours={tours} removeTour={removeTour} /></main>
}

export default App