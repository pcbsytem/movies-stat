import React, { useState } from "react";
import { Icon, Input, InputGroup } from "rsuite";

function SearchInput({ placeholder, action, width, ...props }) {
  const [loading, seLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(0);

  function handleClick() {
    action(search);
  }

  function handleChange(value) {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    seLoading(true);
    const timeout = setTimeout(() => {
      action(value);
      seLoading(false);
    }, 1000);

    setTypingTimeout(timeout);
    setSearch(value);
  }

  return (
    <>
      <InputGroup
        {...props}
        style={{ padding: "16px", width, maxWidth: "1280px" }}
        inside
      >
        <Input placeholder={placeholder} onChange={handleChange} />
        <InputGroup.Button
          onClick={handleClick}
          style={{ top: "16px", right: "16px" }}
          loading={loading}
        >
          <Icon icon="search" />
        </InputGroup.Button>
      </InputGroup>
    </>
  );
}

export default SearchInput;
