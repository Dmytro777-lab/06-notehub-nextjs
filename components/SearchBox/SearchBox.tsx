import css from './SearchBox.module.css';
import type { ChangeEvent } from 'react';

interface SearchBoxProps {
  onSearch: (title: string) => void;
}
export default function SearchBox({ onSearch }: SearchBoxProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };
  return (
    <input
      className={css.input}
      type="text"
      id="search"
      placeholder="Search notes"
      onChange={handleChange}
    />
  );
}
