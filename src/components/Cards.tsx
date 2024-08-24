import { FC, MouseEventHandler, useState } from 'react';
import { Card,CardContent } from '@mui/material';

interface CardsProps {
    data: { [key: string]: string[] } | null;
}

const Cards: FC<CardsProps> = ({ data }) => {
   
    if (data === null) {
        return <div>No data available</div>;
    }

    const renderBreeds = () => {
        return Object.entries(data).map(([breed, subBreeds]) => {
            console.log(breed);
            return (
                <Card className='card'  key={breed} >
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
