import { FC, useState } from 'react';
import { Button, Card, CardContent } from '@mui/material';
import SubBreeds from './SubBreeds';

interface CardsProps {
    data: { [key: string]: string[] } | null;
}

const Cards: FC<CardsProps> = ({ data }) => {
    /**
        * returns cards for breeds and their respective subbreeds
     */
    const [selectedBreed, setSelectedBreed] = useState<string | null>(null);

    const handleCardClick = (breed: string) => {
        setSelectedBreed(prevBreed => (prevBreed === breed ? null : breed));
    };

    if (data === null) {
        return <div>No data available</div>;
    }

    const renderBreeds = () => {
        return Object.entries(data).map(([breed, subBreeds]) => (
            <section key={breed}>
                <Card className='text-card' onClick={() => handleCardClick(breed)}>
                    <CardContent>
                        <h3>{breed}</h3>
                    </CardContent>
                </Card>
                {selectedBreed === breed && (
                    <aside className='show'>
                        <Button className='btn'
                                variant='contained'
                                onClick={() => setSelectedBreed(null)}
                                color='error'>
                            Close
                        </Button>
                        <br />
                        <SubBreeds subBreeds={subBreeds} selectedBreed={breed} />
                    </aside>
                )}
            </section>
        ));
    };

    return <>{renderBreeds()}</>;
};

export default Cards;
