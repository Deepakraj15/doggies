import { FC} from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";

interface ImageCardsProps {
  data: string[]; 
}

const ImageCards: FC<ImageCardsProps> = ({ data }) => {
  /**
   * takes url as props 
   * returns image cards
   */
  if (data.length === 0) {
    return <>Nothing here to load..</>;
  }

  return (

    <Grid container spacing={2}>
      {data.map((url, index) => (
        <Grid item key={index}>
            
          <Card>
            <CardMedia
              className="image-card"
              component="img"
              alt={`Dog Image ${index}`}
              image={url}
              title={`Dog Image ${index}`}
              loading="lazy"
            />
            
          </Card>
          
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageCards;
