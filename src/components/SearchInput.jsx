import { TextInput, View } from 'react-native';
import styled from 'styled-components/native';
import { MagnifyingGlass } from 'phosphor-react-native';
import { useTheme } from 'styled-components';

const SearchInputWrapper = styled(View).attrs({})`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.input.colors.backgroundColor};
  border-radius: 1000px;
  padding: 0px 12px;
`;

const TextInputStyled = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.input.colors.placeholder,
}))`
  flex: 1;
  padding: 14px 0px;
  color: ${({ theme }) => theme.input.colors.text};
  font-weight: 600;
  margin-left: 10px;
  font-size: 18px;
`;

const IconStyled = styled(MagnifyingGlass).attrs(({ theme }) => ({
  size: 18,
  weight: 'bold',
  color: theme.input.colors.icon,
}))``;

export function SearchInput({ style, ...rest }) {
  const {} = useTheme();
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
