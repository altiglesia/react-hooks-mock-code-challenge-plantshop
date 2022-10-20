import React, { useState } from "react";

function NewPlantForm({ addPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  })

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formData);
    addPlant(formData);
    console.log(formData)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Plant name" />
        <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />
        <input type="number" name="price" value={formData.price} onChange={handleChange} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
