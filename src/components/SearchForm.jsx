import { useState } from 'react';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  console.log(searchQuery);

  const onFormSubmit = e => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="text" onInput={e => setSearchQuery(e.target.value)} />
        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default SearchForm;
