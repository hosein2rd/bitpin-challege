import styled from "styled-components";

type CardProps = { title: string; price: string };

const Card = ({ title, price }: CardProps) => (
  <CardContainer>
    <Title>{title}</Title>
    <Price>price: {price}</Price>
  </CardContainer>
);

const CardContainer = styled.div`
  padding: 2rem 1rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0 2rem lightgray;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  color: black;
  font-size: 1rem;
`;

const Price = styled.p`
  color: black;
  font-size: 0.75rem;
`;

export default Card;
