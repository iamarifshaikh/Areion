import { useEffect, useState } from 'react';
import axios from 'axios';

export const DataComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://areion.onrender.com/api/data');
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Data from the Database</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name} -- {item.email} -- {item.subject} --{item.message}
          </li>
        ))}
      </ul>
    </div>
  );
};