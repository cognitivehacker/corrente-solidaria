import styled, { css } from "styled-components";
import { width } from "styled-system";
import { theme } from "styled-tools";

const Button = styled.button`
  font-size: 14px;
  padding: 8px 14px;
  ${({ bigButton }) =>
    bigButton &&
    css`
      padding: 18px 14px;
    `}
  border: 0;
  border-radius: 3px;
  ${({ borderRadios }) =>
    borderRadios &&
    css`
      border-radius: 15px;
    `}
  color: ${theme("colors.texts.white")};
  background-color: ${theme("colors.backgrounds.primary.green")};
  ${width}
  :hover{
    background-color: #48b958;
  }
`;

export default Button;
