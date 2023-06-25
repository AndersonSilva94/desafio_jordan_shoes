import { Container, ImageMessage, Message } from "./styles";

interface CartMessagesProps {
  message: string;
  isEmpty: boolean;
}

function CartMessages(props: CartMessagesProps) {
  return (
    <Container>
      <Message>{ props.message }</Message>
      <ImageMessage 
        src={props.isEmpty ? 'src/assets/icons/empty.svg' : 'src/assets/icons/nike.svg'}
      />
    </Container>
  )
}

export default CartMessages;