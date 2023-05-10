import { useState } from 'react'
import { Input, InputGroup, Loader } from 'rsuite'
import SearchIcon from '@rsuite/icons/Search'
import { SearchInputProps } from '../atomos.types'

export function SearchInput({ placeholder, action, size }: SearchInputProps) {
  const [loading, seLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout>()

  function handleClick() {
    action(search)
  }

  function handleChange(value: string) {
    if (typingTimeout) {
      clearTimeout(typingTimeout)
    }
    seLoading(true)
    const timeout: NodeJS.Timeout = setTimeout(() => {
      action(value)
      seLoading(false)
    }, 1000)

    setTypingTimeout(timeout)
    setSearch(value)
  }

  return (
    <InputGroup size={size}>
      <Input
        placeholder={placeholder}
        onChange={handleChange}
        alt="search input"
        autoComplete="on"
      />
      <InputGroup.Addon onClick={handleClick}>
        {loading ? <Loader /> : <SearchIcon />}
      </InputGroup.Addon>
    </InputGroup>
  )
}
