import { BottomSheetFooter } from '@gorhom/bottom-sheet';
import { SpeakerHigh } from 'phosphor-react-native';
import { View } from 'react-native';
import { useTheme } from 'styled-components';
import styled from 'styled-components/native';
import { Shadow } from 'react-native-shadow-2';
import { IconButton } from '../../atoms/iconButton';
import { Button } from '../../atoms/button';

import MapPin from '../../../assets/MapPin.svg';

const FooterWrapper = styled(View).attrs({})`
  background-color: white;
  height: ${({ theme }) => theme.bottomSheetFooter.height}px;
  padding: 0 16px;
  padding-top: 24px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export function HomeBottomSheetFooter({ animatedFooterPosition }) {
  const { colors } = useTheme();

  return (
    <BottomSheetFooter animatedFooterPosition={animatedFooterPosition}>
      <Shadow stretch offset={[0, 3]} distance={10}>
        <FooterWrapper>
          <Button label="My Waze" icon={MapPin} />
          <IconButton icon={SpeakerHigh} color={colors.secondary} />
        </FooterWrapper>
      </Shadow>
    </BottomSheetFooter>
  );
}
