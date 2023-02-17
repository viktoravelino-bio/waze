import { MagnifyingGlass } from 'phosphor-react-native';
import { TextInput, View } from 'react-native';
import styled from 'styled-components';

export const SearchInputWrapper = styled(View).attrs({})`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.input.colors.backgroundColor};
  border-radius: 1000px;
  padding: 0px 16px;
  align-self: center;
  width: 100%;
  flex: 1;
`;

export const TextInputStyled = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.input.colors.placeholder,
}))`
  flex: 1;
  padding: 12px 0px;
  color: ${({ theme }) => theme.input.colors.text};
  font-weight: 600;
  margin-left: 10px;
  font-size: 18px;
`;

export const IconStyled = styled(MagnifyingGlass).attrs(({ theme }) => ({
  size: 18,
  weight: 'bold',
  color: theme.input.colors.icon,
}))``;
