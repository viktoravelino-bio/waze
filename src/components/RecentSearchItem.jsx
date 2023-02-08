import { Text, TouchableOpacity, View } from 'react-native';
import { CaretRight } from 'phosphor-react-native';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components';

const RecentSearchItemWrapper = styled(TouchableOpacity).attrs({})`
  width: 93%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 12px;
  background-color: white;
  box-shadow: 0.5px 2px 3px rgba(0, 0, 0, 0.25);
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
    <View style={{ alignItems: 'center' }}>
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
    </View>
  );
}
