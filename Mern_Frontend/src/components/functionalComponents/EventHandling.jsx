import { useState } from 'react';

function EventHandling() {

  const [inputValue, setInputValue] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');



  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with : ${inputValue}`);
  };

  return (
    <div>
      <p>Event Handling with State</p>
      

      <input 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {inputValue}</p>
      

      <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          padding: '20px',
          backgroundColor: isHovered ? 'lightpink' : 'lightgray',
          margin: '10px 0'
        }}
      >
        {isHovered ? 'Mouse is over me!' : 'Hover over me!'}
      </div>
      
    
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Choose an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p>Selected: {selectedOption}</p>
      

      <form onSubmit={handleSubmit}>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default EventHandling;

