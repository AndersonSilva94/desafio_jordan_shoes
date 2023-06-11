import { Background, CheckoutDiv, CheckoutMain, CheckoutMainTitle, CheckoutTotalPrice, Container, Divider, TotalPrice } from "./styles";

function Checkout() {
  return (
    <Container>
      <Background />
      <CheckoutDiv>
        <CheckoutMain>
          <CheckoutMainTitle>
            Carrinho de compras
          </CheckoutMainTitle>
          <Divider />
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