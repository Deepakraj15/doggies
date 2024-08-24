import { FC, useState, useEffect } from "react";
import axios from "axios";
import ImageCards from "./ImageCards";

interface ImageDogs {
  message: string[];
  status: string;
}

const ImageContainer: FC = () => {
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
      <ImageCards data={imageUrls} />
    </>
  );
};

export default ImageContainer;
