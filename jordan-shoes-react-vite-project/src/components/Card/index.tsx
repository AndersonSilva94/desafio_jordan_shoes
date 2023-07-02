import React from 'react';
import { ButtonAdd, Container, Image, InfoProduct, Price, Title } from "./styles";
import { useStore } from '../../store/store';

interface CardProps {
  title: string;
  price: number;
  image: string;
}

function Card(props: CardProps) {
  const addItem = useStore((state: any) => state.addItem);
  const toggleCart = useStore((state: any) => state.setOpenCheckout);

  return (
    <Container>
      <Image
        src={props.image}
      />
      <InfoProduct>
        <Title>{props.title}</Title>
        <Price>{props.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Price>
        <ButtonAdd
          onClick={() => {
            addItem(props);
            toggleCart(true);
          }}
        >Adicionar ao carrinho</ButtonAdd>
      </InfoProduct>
    </Container>
  )
}

export default Card;