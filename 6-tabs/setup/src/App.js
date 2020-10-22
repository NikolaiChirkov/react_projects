import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
const url = 'https://course-api.netlify.app/api/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <section className="section loading">
      <h2>Loading...</h2>
    </section>
  }

  return <main>

  </main>;
}

export default App;
