import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import useInputInner from '../hooks/useInputInner';

function NewThreadInput({ newThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyInput] = useInputInner('');

  return (
    <form className="new-thread-input">
      <input type="text" placeholder="Judul" value={title} onChange={onTitleChange} />
      <input type="text" placeholder="Kategori" value={category} onChange={onCategoryChange} />
      <div className="input-body" data-testid="body" contentEditable value={body} onInput={onBodyInput} />
      <button type="button" onClick={() => newThread({ title, body, category })}>Buat</button>
    </form>
  );
}

NewThreadInput.propTypes = {
  newThread: PropTypes.func.isRequired,
};

export default NewThreadInput;
