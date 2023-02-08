import { BottomSheetFooter } from '@gorhom/bottom-sheet';
import { MapPin, SpeakerHigh } from 'phosphor-react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components';
import styled from 'styled-components/native';

import { IconButton } from './IconButton';

const FooterWrapper = styled(View).attrs({})`
  background-color: white;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  height: ${({ theme }) => theme.bottomSheetFooter.height}px;
  padding: 0 16px;
  padding-top: 24px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const MyWazeWrapper = styled(TouchableOpacity).attrs({})`
  flex-direction: row;
  align-items: center;
`;

const MyWazeText = styled(Text).attrs({})`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray[500]};
  font-weight: 600;
  margin-left: 6px;
`;

export function HomeFooter({ animatedFooterPosition }) {
  const { colors } = useTheme();

  return (
    <BottomSheetFooter animatedFooterPosition={animatedFooterPosition}>
      <FooterWrapper>
        <MyWazeWrapper>
          <MapPin weight="fill" size={24} color={colors.gray[500]} />
          <MyWazeText>My Waze</MyWazeText>
        </MyWazeWrapper>
        <IconButton icon={SpeakerHigh} color={colors.secondary} />
      </FooterWrapper>
    </BottomSheetFooter>
  );
}
