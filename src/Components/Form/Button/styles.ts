import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren<RectButtonProps> {}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  align-items: center;
  padding: 18px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
`;
