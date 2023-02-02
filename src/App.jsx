import { useState, useEffect } from "react"

const URL = 'https://course-api.com/react-tours-project'

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    setLoading(true)
    const response = await fetch(URL)
    const data = await response.json()

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

  return <div>App</div>
}

export default App