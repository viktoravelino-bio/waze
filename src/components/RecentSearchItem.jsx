import { Text, TouchableOpacity, View } from 'react-native';
import { CaretRight } from 'phosphor-react-native';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components';
import { Shadow } from 'react-native-shadow-2';

const RecentSearchItemWrapper = styled(TouchableOpacity).attrs({})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 12px;
  background-color: white;
`;

const IconContainer = styled(View).attrs({})`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  padding: 2px;
`;

const IconStyled = styled(CaretRight).attrs({
  size: 12,
  color: 'white',
  weight: 'bold',
})``;

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
