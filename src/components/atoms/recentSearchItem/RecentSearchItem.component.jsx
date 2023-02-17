import { Text, View } from 'react-native';
import { useTheme } from 'styled-components';
import { Shadow } from 'react-native-shadow-2';
import {
  IconContainer,
  IconStyled,
  RecentSearchItemWrapper,
} from './RecentSearchItem.styles';

export function RecentSearchItem() {
  const { colors } = useTheme();
  const { gray } = colors;
  return (
    <View style={{ width: '93%', alignSelf: 'center' }}>
      <Shadow
        distance={2}
        startColor={'rgba(0, 0, 0, 0.1)'}
        offset={[0, 1]}
        stretch
        style={{ borderRadius: 8 }}
      >
        <RecentSearchItemWrapper>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
              }}
            >
              Ottawa
            </Text>
            <Text style={{ color: gray[500] }}>Ottawa, ON</Text>
          </View>

          <View>
            <IconContainer>
              <IconStyled />
            </IconContainer>
          </View>
        </RecentSearchItemWrapper>
      </Shadow>
    </View>
  );
}
