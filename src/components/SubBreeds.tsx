import { FC } from 'react';

interface SubBreedProps {
    subBreeds: string[]; 
    selectedBreed? :string |null;
}

const SubBreeds: FC<SubBreedProps> = ({ subBreeds,selectedBreed}) => {
 //   console.log(selectedBreed);
    console.log(subBreeds);
    if (subBreeds.length === 0) {
        console.log(subBreeds);
        return <>No subbreeds found</>;
    }
    
    return (
        <>
        <article>
             <h1 key={selectedBreed}>{selectedBreed}</h1>
            <ul>
                Sub-breeds
                {
                    subBreeds.map(subBreed => (
                    subBreed.length > 0 ? (
                        
                        <li key={subBreed}>{subBreed}</li>
                    ) : (
                        <p key={subBreed}>Nothing to show here</p>
                    )
                ))}
            </ul>
            </article>
        </>

    );
}

export default SubBreeds;
