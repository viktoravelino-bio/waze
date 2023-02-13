import {
  IconStyled,
  SearchInputWrapper,
  TextInputStyled,
} from './searchInput.styles';

export function SearchInput({ style, ...rest }) {
  return (
    <SearchInputWrapper style={style}>
      <IconStyled />
      <TextInputStyled
        placeholder="Search"
        autoCapitalize="sentences"
        autoCorrect={false}
        {...rest}
      />
    </SearchInputWrapper>
  );
}
