import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState ([])
  const [originalPlants, setOriginalPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(
      plants => {
      setPlants(plants)
      setOriginalPlants(plants)})
  }, [])

  const addPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newPlant.name,
        image: newPlant.image,
        price: parseInt(newPlant.price),
      })
    })
    .then(res => res.json())
    .then(setPlants([...plants, newPlant]));
  };

  function matchPlant(searchedPlant) {
    const matchingPlant = originalPlants.filter((plant) => {
      return plant.name.toLowerCase().includes(searchedPlant.toLowerCase())
    })
    setPlants(matchingPlant)
  }
  

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search matchPlant={matchPlant}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
