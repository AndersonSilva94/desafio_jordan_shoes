import { ChangeEvent, useState } from "react";
import { ButtonCount, Container, Counter, CounterDiv, ImageProduct, InfoProduct, InputValue, NameProduct, ParcialPrice } from "./styles";

interface CardProps {
  title: string;
  price: number;
  image: string;
}


function CheckoutCard(props: CardProps) {
  const [count, setCount] = useState(0);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const value = parseInt(event.target.value);
    setCount(value)
  }

  function increment(): void {
    setCount(count + 1);
  };

  function decrement(): void {
    setCount(count - 1);
  };

  function convertPrice(price: number): string {
    return (price * count).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
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
              onClick={decrement}
            >-</ButtonCount>
            <InputValue 
              value={count}
              onChange={handleInputChange}
            />
            <ButtonCount
              onClick={increment}
            >+</ButtonCount>
          </CounterDiv>
          <ParcialPrice>
            { convertPrice(props.price) }
          </ParcialPrice>
        </Counter>

      </InfoProduct>
    </Container>
  )
};

export default CheckoutCard;