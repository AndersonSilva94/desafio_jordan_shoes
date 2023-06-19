import { Background, CheckoutDiv, CheckoutMain, CheckoutMainTitle, CheckoutTotalPrice, CloseButton, Container, Divider, Header, TotalPrice } from "./styles";
import CheckoutCard from "../CheckoutCard";
import { useStore } from "../../store/store";

function Checkout() {
  const shoes = useStore((state: any) => state.cartItems);
  const toggleCart = useStore((state: any) => state.setOpenCheckout);

  function getTotalPrice(items: any[]) {
    const price = items.reduce((acc, cur) => {
      return acc + (cur.quantity * cur.price)
    }, 0)

    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
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
          {shoes && shoes.map((shoe: any) => 
          (<CheckoutCard
            key={shoe.title}
            title={shoe.title}
            price={shoe.price}
            image={shoe.image}
            quantity={shoe.quantity}
          />)) }
        </CheckoutMain>
        <CheckoutTotalPrice>
          <Divider />
          <TotalPrice>Preço total: {getTotalPrice(shoes)}</TotalPrice>
        </CheckoutTotalPrice>
      </CheckoutDiv>
    </Container>
  )
}

export default Checkout;