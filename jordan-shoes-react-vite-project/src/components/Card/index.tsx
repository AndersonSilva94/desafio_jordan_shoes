import React from 'react';
import { ButtonAdd, Container, Image, InfoProduct, Price, Title } from "./styles";

interface CardProps {
  title: string;
  price: number;
  image: string;
}

function Card(props: CardProps) {

  return (
    <Container>
      <Image
        src={props.image}
      />
      <InfoProduct>
        <Title>{props.title}</Title>
        <Price>{props.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Price>
        <ButtonAdd>Adicionar ao carrinho</ButtonAdd>
      </InfoProduct>
    </Container>
  )
}

export default Card;