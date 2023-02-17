import { CaretRight } from 'phosphor-react-native';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

export const RecentSearchItemWrapper = styled(TouchableOpacity).attrs({})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 12px;
  background-color: white;
`;

export const IconContainer = styled(View).attrs({})`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  padding: 2px;
`;

export const IconStyled = styled(CaretRight).attrs({
  size: 12,
  color: 'white',
  weight: 'bold',
})``;
