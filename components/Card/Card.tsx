import styled from "styled-components";
import { border, suits, values } from "./cards";
import { red, black } from "tokens/colors";

type Props = {
  suit: "hearts" | "diamonds" | "spades" | "clubs";
  value:
    | "A"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "J"
    | "Q"
    | "K";
  height?: number;
};

const Card: React.FC<Props> = ({ height = 60, suit, value }) => {
  const svg = border + values[value] + suits[suit];

  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 40 50"
      xmlSpace="preserve"
      dangerouslySetInnerHTML={{ __html: svg }}
      height={height}
      color={suit === "diamonds" || suit === "hearts" ? red : black}
    />
  );
};

export default Card;

const StyledSvg = styled.svg`
  height: ${(props) => props.height}px;

  .suit,
  .value {
    fill: ${(props) => props.color};
  }
`;
