// show specific pet

const PetCard = ({pets}) => {
    return (
        <>
            <h2>Pets</h2>
            <div className="PetsCardDiv">
                {pets.map((pet, index) => (
                    <div className = "PetCard" key={index}>
                        <h3> {pet.name} </h3>
                        <p> Breed: {pet.breed} </p>
                        <p> Age: {pet.age} </p>
                        <p> Sex: {pet.sex} </p>
                    </div>
                ))};
            </div>
        </>
    );
};

export default PetCard;