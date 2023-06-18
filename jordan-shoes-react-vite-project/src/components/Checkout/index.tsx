import { useEffect, useState } from "react";
import { Background, CheckoutDiv, CheckoutMain, CheckoutMainTitle, CheckoutTotalPrice, CloseButton, Container, Divider, Header, TotalPrice } from "./styles";
import { getAllShoes } from '../../services/api';
import CheckoutCard from "../CheckoutCard";
import { useStore } from "../../store/store";

interface CardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

function Checkout() {
  const shoes = useStore((state: any) => state.cartItems);
  const toggleCart = useStore((state: any) => state.setOpenCheckout);

  return (
    <Container>
      <Background
        onClick={() => toggleCart()}
      />
      <CheckoutDiv>
        <CheckoutMain>
          <Header>
            <CheckoutMainTitle>
              Carrinho de compras
            </CheckoutMainTitle>
            <CloseButton
              onClick={() => toggleCart()}
            >+</CloseButton>
          </Header>
          <Divider />
          {shoes && shoes.map((shoe: any) => 
          (<CheckoutCard
            key={shoe.id}
            title={shoe.title}
            price={shoe.price}
            image={shoe.image}
          />)) }
        </CheckoutMain>
        <CheckoutTotalPrice>
          <Divider />
          <TotalPrice>Preço total: R$ 1000,00</TotalPrice>
        </CheckoutTotalPrice>
      </CheckoutDiv>
    </Container>
  )
}

export default Checkout;