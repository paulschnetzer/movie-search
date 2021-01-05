import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

export default function Test() {
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);
  console.log(selectedValue);

  // handle input change event
  const handleInputChange = (value) => {
    setValue(value);
  };

  // handle selection
  const handleChange = (value) => {
    setSelectedValue(value);
  };

  // load options using API call
  const loadOptions = (inputValue) => {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=268a7d083c5b3d50039c4331c0b31383&language=en-US&query=${inputValue}
      &page=1`,
    )
      .then((res) => res.json())
      .then((data) => data.results);
  };
  console.log(loadOptions(1));
  return (
    <div className="App">
      <pre>Input Value: "{inputValue}"</pre>
      <AsyncSelect
        isClearable
        cacheOptions
        defaultOptions
        value={selectedValue}
        getOptionLabel={(e) => e.title}
        getOptionValue={(e) => e.id}
        loadOptions={loadOptions}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
      <pre>Selected Value: {JSON.stringify(selectedValue || {}, null, 2)}</pre>
    </div>
  );
}
