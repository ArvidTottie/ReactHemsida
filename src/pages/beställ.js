import { useState } from 'react';
import React from "react";


function Beställ() {
  const [formFields, setFormFields] = useState([
    { name: '', antal: '' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }

  const addFields = () => {
    let object = {
      name: '',
      antal: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  return (
    
    <div className="Beställ">
        <h1>Beställ</h1>
        <p>Välj vilken/vilka pizzor du vill beställa samt dess antal.</p>
        <form onSubmit={submit}>
  {formFields.map((form, index) => {
    return (
      <div key={index}>
        <select
          className="beställinput"
          name='Pizza'
          onChange={event => handleFormChange(event, index)}
          value={form.pizza}
        >
          <option value='Margeritha'>Margeritha</option>
          <option value='Vesivio'>Vesivio</option>
          <option value='Funghi'>Funghi</option>
          <option value='Kebabrulle'>Kebabrulle</option>
          <option value='Kycklingssallad'>Kycklingssallad</option>

        </select>
        <input
          className="beställinput"
          name='antal'
          placeholder='Antal'
          onChange={event => handleFormChange(event, index)}
          value={form.antal}
        />
        <button className="tabortknapp" onClick={() => removeFields(index)}>Ta bort</button>
      </div>
    )
  })}
</form>

      <button className="beställknappar" onClick={addFields}>Lägg till fler</button>
      <br></br>
      <button className="skickabeställning" onClick={submit}>Skicka Beställning</button>
    </div>
  );
}

export default Beställ;