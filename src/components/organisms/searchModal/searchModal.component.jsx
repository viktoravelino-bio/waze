import { useNavigation } from '@react-navigation/native';
import { CaretLeft } from 'phosphor-react-native';
import { View } from 'react-native';
import { useTheme } from 'styled-components';
import { SearchInput } from '../../atoms/searchInput';
import { IconButton } from '../../atoms/iconButton';
import { Shadow } from 'react-native-shadow-2';
import { SearchListItem } from '../../atoms/searchListItem';
import { ModalContainer, ModalHeader, SearchList } from './searchModal.styles';
import { useEffect, useState } from 'react';
import { useSearchAddress } from '../../../hooks/use-search-address';
import { useDebouncedValue } from '@mantine/hooks';

const list_type = {
  favorite: 'favorite',
  history: 'history',
  contact: 'contact',
  address: 'address',
};

const placeholderList = [
  { type: list_type.favorite, label: 'Saved places', subLabel: '' },
  { type: list_type.history, label: 'History', subLabel: '' },
  {
    type: list_type.contact,
    label: 'Search contacts',
    subLabel: 'Drive to friends & family',
  },
];

export function SearchModal() {
  const { goBack } = useNavigation();
  const { colors } = useTheme();
  const { searchAddress } = useSearchAddress();
  const [searchValue, setSearchValue] = useState('');
  const [searchedResults, setSearchedResults] = useState([]);
  const [debouncedSearchValue] = useDebouncedValue(searchValue, 500);

  useEffect(() => {
    async function search() {
      const response = await searchAddress(debouncedSearchValue);
      setSearchedResults(response);
    }

    search();
  }, [debouncedSearchValue]);

  return (
    <ModalContainer>
      <ModalHeader>
        <IconButton
          icon={CaretLeft}
          color={colors.secondary}
          style={{ width: 40, aspectRatio: 1, marginRight: 8 }}
          onPress={() => goBack()}
        />

        <SearchInput
          autoFocus
          onChangeText={setSearchValue}
          value={searchValue}
        />
      </ModalHeader>

      <View style={{ flex: 1, overflow: 'hidden' }}>
        <Shadow
          distance={10}
          style={{
            width: '100%',
          }}
        />

        <SearchList
          data={searchedResults.length > 0 ? searchedResults : placeholderList}
          renderItem={SearchListItem}
          keyExtractor={({ label, place_id }) => place_id ?? label}
        />
      </View>
    </ModalContainer>
  );
}
