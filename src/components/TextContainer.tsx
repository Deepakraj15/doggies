import { FC, useState, useEffect } from "react";
import axios from 'axios';
import Cards from "./Cards";

const TextContainer: FC = () => { 
/**
 * fetches breed information along with their subbreeds and renders it in a card component
 */
  const [breeds, setBreeds] = useState<{ [key: string]: string[] } | null>(null);

  const fetchTextData = async () => {
    try {
      const response = await axios.get<{ message: { [key: string]: string[] } }>("https://dog.ceo/api/breeds/list/all");
      setBreeds(response.data.message);
    } catch (err) {
      console.error('Error fetching text data:', err);
      alert('Something went wrong while fetching text data');
    }
  };

  useEffect(() => { // used for default loading
    fetchTextData();
  }, []);

  return (
    <>
      <h1 className="heading">Doggies Web App</h1>
      <div className="container">
        {breeds ? (
          <Cards data={breeds} />
        ) : (
          <p>Loading breeds...</p>
        )}
      </div>
    </>
  );
};

export default TextContainer;
