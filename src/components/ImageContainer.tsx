import { FC, useState, useEffect } from "react";
import axios from "axios";
import ImageCards from "./ImageCards";
import { Button } from "@mui/material";
interface ImageDogs {
  message: string[];
  status: string;
}

const ImageContainer: FC = () => {
  /**
   * Container to render images of random dogs
   * upon scrolling to the end of the page 
   * api call will be triggered and new image-cards will be rendered.
   */
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  

  const fetchImageData = async () => {
    
    try {
      const response = await axios.get<ImageDogs>("https://dog.ceo/api/breeds/image/random/20");
      setImageUrls(prev => [...prev, ...response.data.message]);
      console.log(imageUrls);
    } catch (err) {
      alert('Something went wrong while fetching image data');
    } finally {
     
    }
  };

  const handleScroll = () => {
    if ( window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 ) 
      console.log(true);
       fetchImageData();
      

   };

  useEffect(() => {
        fetchImageData();
        document.addEventListener('scrollend',handleScroll);
  }, []); 

  return (
  <>
    <nav>
    <h3>Random Doggies Images</h3>
    <Button variant='contained' href="/">Go Back to Home</Button>
    </nav>
    <div className="container">
      <ImageCards data={imageUrls} />
      </div>
      </>
  );
};

export default ImageContainer;
