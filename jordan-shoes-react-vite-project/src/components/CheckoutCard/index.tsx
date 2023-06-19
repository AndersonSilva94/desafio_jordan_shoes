import { ButtonCount, Container, Counter, CounterDiv, ImageProduct, InfoProduct, InputValue, NameProduct, ParcialPrice } from "./styles";
import { useStore } from "../../store/store";

interface CardProps {
  title: string;
  price: number;
  image: string;
  quantity: number;
}


function CheckoutCard(props: CardProps) {
  const incrementItem = useStore((state: any) => state.incrementItem);
  const decrementItem = useStore((state: any) => state.decrementItem);

  function convertPrice(price: any): string {
    return (price.price * props.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  return(
    <Container>
      <ImageProduct 
        src={props.image}
      />
      <InfoProduct>
        <NameProduct>{props.title}</NameProduct>

        <Counter>
          <CounterDiv>
            <ButtonCount
              onClick={() => decrementItem(props)}
            >-</ButtonCount>
            <InputValue 
              value={props.quantity}
              readOnly
            />
            <ButtonCount
              onClick={() => incrementItem(props)}
            >+</ButtonCount>
          </CounterDiv>
          <ParcialPrice>
            { convertPrice(props) }
          </ParcialPrice>
        </Counter>

      </InfoProduct>
    </Container>
  )
};

export default CheckoutCard;