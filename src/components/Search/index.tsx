import React, { useEffect, useState } from 'react';
import { IconSearch } from '../../assets/IconSearch';
import './style.less';
import styled from "styled-components";

interface SearchProps {
  onSearch: (search: string) => void;
  placeholder?: string;
}

const DEBOUNCE_TIME = 300;
export const Search: React.FC<SearchProps> = ({ onSearch, placeholder }) => {
  const [keyword, setKeyword] = useState<string>();

  useEffect(() => {
    const timeout = setTimeout(() => onSearch(keyword || ''), DEBOUNCE_TIME);
    return () => clearTimeout(timeout);
  }, [keyword, onSearch]);

  return (
    <DivStyled >
      <IconSearch />
      <InputStyled
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value)}
      />
    </DivStyled>
  );
};

const DivStyled = styled.div`
display: flex;
position: relative;
margin-bottom: 10px;

svg {
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: #71717D;
}

`;

const InputStyled = styled.input`

  padding: 4px 4px 4px 24px;
  border-radius: 8px;
  background-color: #F4F4F8;
  border: 2px solid #C1C1D2;
  max-width: 500px;
  width: 100%;

  &::placeholder {
    color: #71717D;
  }
`;