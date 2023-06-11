import { useEffect, useState } from "react";
import { Background, CheckoutDiv, CheckoutMain, CheckoutMainTitle, CheckoutTotalPrice, Container, Divider, TotalPrice } from "./styles";
import { getAllShoes } from '../../services/api';
import CheckoutCard from "../CheckoutCard";

interface CardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

function Checkout() {
  const [shoes, setShoes] = useState<CardProps[]>([]);

  useEffect(() => {
    const getShoes = async () => {
      try {
        const shoes = await getAllShoes();
        setShoes(shoes);
      } catch (err) {
        console.error(true)
      }
    }

    getShoes()
  }, [])

  return (
    <Container>
      <Background />
      <CheckoutDiv>
        <CheckoutMain>
          <CheckoutMainTitle>
            Carrinho de compras
          </CheckoutMainTitle>
          <Divider />
          {shoes && shoes.map((shoe) => 
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