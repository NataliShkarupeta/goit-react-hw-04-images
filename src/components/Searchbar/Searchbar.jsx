import { useState } from 'react';
import { Header, Form, Input } from './Searchbar.styled';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [word, setWord] = useState('');

  const takeText = e => {
    const { value } = e.target;
    setWord(value.toLowerCase());
  };

  const handelSubmit = e => {
    e.preventDefault();
    if (word.trim() === '') {
      return;
    }
    onSubmit(word);
    setWord('');
  };

  return (
    <Header>
      <Form>
        <Input
          name="word"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={word}
          onChange={takeText}
        />
        <button type="submit" onClick={handelSubmit}>
          <span>Search</span>
        </button>
      </Form>
    </Header>
  );
};


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
