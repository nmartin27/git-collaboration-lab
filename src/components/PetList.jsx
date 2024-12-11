// show list of all pets

import PetCard from "./PetCard";

const PetList = ({pets}) => {
    return (
        <div>
            <ul>
                {pets.map((pet) => (
                    <li key={pet.name}>
                        <PetCard pet={pet} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PetList;