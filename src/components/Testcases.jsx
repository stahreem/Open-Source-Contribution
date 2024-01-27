import React, { useState } from 'react';

function FormWithTextAreaAndInput() {
  const [textAreas, setTextAreas] = useState([]);
  const [inputs, setInputs] = useState([]);
  const [formValues, setFormValues] = useState([]);

  const handleTextAreaChange = (index, event) => {
    const values = [...textAreas];
    values[index] = event.target.value;
    setTextAreas(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputs];
    values[index] = event.target.value;
    setInputs(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newValue = {
      textAreas: [...textAreas],
      inputs: [...inputs]
    };
    setFormValues([...formValues, newValue]);
    console.log(newValue);
    setTextAreas([]);
    setInputs([]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input/>
        {textAreas.map((text, index) => (
          <textarea
            key={index}
            value={text}
            onChange={(event) => handleTextAreaChange(index, event)}
          ></textarea>
        ))}
          <input
            onChange={(event) => handleInputChange(index, event)}
          />
        
        <button type="submit">Submit</button>
      </form>
      <div>
        {formValues.map((formValue, index) => (
          <div key={index}>
            <p>Test Case </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FormWithTextAreaAndInput;

