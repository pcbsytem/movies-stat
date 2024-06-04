import { useState } from 'react';
import { Input, InputGroup, Loader } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import { SearchInputProps } from '../atoms.types';

export function SearchInput({
  placeholder,
  action,
  size,
  alt
}: Readonly<SearchInputProps>) {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout>();

  function handleClick() {
    action(search);
  }

  function handleChange(value: string) {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    setLoading(true);
    const timeout: NodeJS.Timeout = setTimeout(() => {
      action(value);
      setLoading(false);
    }, 1000);

    setTypingTimeout(timeout);
    setSearch(value);
  }

  return (
    <InputGroup size={size}>
      <InputGroup.Addon onClick={handleClick}>
        {loading ? <Loader /> : <SearchIcon />}
      </InputGroup.Addon>
      <Input
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete='on'
        alt={alt}
      />
    </InputGroup>
  );
}
