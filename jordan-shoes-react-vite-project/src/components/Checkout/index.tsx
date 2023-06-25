import { useState } from "react";
import { Background, CheckoutDiv, CheckoutMain, CheckoutMainTitle, CheckoutSection, CheckoutTotalPrice, CloseButton, Container, Divider, FinishedButton, Header, TotalPrice } from "./styles";
import CheckoutCard from "../CheckoutCard";
import { useStore } from "../../store/store";
import CartMessages from "../CartMessages";

function Checkout() {
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);
  const shoes = useStore((state: any) => state.cartItems);
  const toggleCart = useStore((state: any) => state.setOpenCheckout);
  const cleanCart = useStore((state: any) => state.cleanCartState);

  function getTotalPrice(items: any[]) {
    const price = items.reduce((acc, cur) => {
      return acc + (cur.quantity * cur.price)
    }, 0)

    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  function checkoutProducts() {
    cleanCart();
  }

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
          {!!shoes && shoes.map((shoe: any) => 
          (<CheckoutCard
            key={shoe.title}
            title={shoe.title}
            price={shoe.price}
            image={shoe.image}
            quantity={shoe.quantity}
          />)) }
          {shoes.length === 0 && !finished && <CartMessages 
            message="Seu carrinho de compras está vazio"
            isEmpty={true}
          />}
          {finished && <CartMessages 
            message="Compra concluída com sucesso! Aproveite!"
            isEmpty={false}
          />}
        </CheckoutMain>
        <CheckoutTotalPrice>
          <Divider />
          <CheckoutSection>
            <TotalPrice>Preço total: {getTotalPrice(shoes)}</TotalPrice>
            <FinishedButton
              disabled={shoes.length === 0}
              onClick={() => checkoutProducts()}
            >Finalizar compra</FinishedButton>
          </CheckoutSection>
        </CheckoutTotalPrice>
      </CheckoutDiv>
    </Container>
  )
}

export default Checkout;