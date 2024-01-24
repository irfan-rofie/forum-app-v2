import { useState } from 'react';
import parser from 'html-react-parser';

function useInputInner(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  function handleValueInput({ target }) {
    setValue(target.innerHTML);
  }

  return [parser(value), handleValueInput];
}

export default useInputInner;
