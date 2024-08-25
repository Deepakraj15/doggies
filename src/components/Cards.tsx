import { FC } from 'react';
import { Card,CardContent } from '@mui/material';

interface CardsProps {
    data: { [key: string]: string[] } | null;
}

const Cards: FC<CardsProps> = ({ data }) => {
    /**
     * takes breed and subbreed as props 
     * returns Breed and their respective cards
     */
   
    if (data === null) {
        return <div>No data available</div>;
    }

    const renderBreeds = () => {
        return Object.entries(data).map(([breed, subBreeds]) => {
            console.log(breed);
            return (
                <Card className='text-card'  key={breed} >
                    <CardContent>
                        <h3>{breed}</h3>
                        <ul>
                            {subBreeds.map(subBreed => (
                                subBreed.length > 0 ?
                                <li key={subBreed}>{subBreed}</li>:
                                <p>Nothing to show here</p>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            );
        });
    };

    return <>{renderBreeds()}</>;
};

export default Cards;
