import { ChangeEvent, useState } from "react";
import { ButtonCount, Container, CounterDiv, ImageProduct, InfoProduct, InputValue, NameProduct } from "./styles";

interface CardProps {
  title: string;
  price: number;
  image: string;
}


function CheckoutCard(props: CardProps) {
  const [count, setCount] = useState(0);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    setCount(value)
  }

  function increment() {
    setCount(count + 1);
  };

  function decrement() {
    setCount(count - 1);
  };

  return(
    <Container>
      <ImageProduct 
        src={props.image}
      />
      <InfoProduct>
        <NameProduct>{props.title}</NameProduct>

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

      </InfoProduct>
    </Container>
  )
};

export default CheckoutCard;