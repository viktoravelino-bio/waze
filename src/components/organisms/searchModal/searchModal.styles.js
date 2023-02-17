import { View } from 'react-native';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const ModalContainer = styled(View).attrs({})`
  flex-grow: 1;
  margin-top: 45px;
  background-color: white;
`;

export const ModalHeader = styled(View).attrs({})`
  flex-direction: row;
  align-items: center;
  padding: 12px 10px;
`;

export const SearchList = styled(FlatList).attrs({
  contentContainerStyle: {
    backgroundColor: 'white',
    minHeigh: '100%',
    // flex: 1,
  },
})`
  padding-top: 1px;
`;
