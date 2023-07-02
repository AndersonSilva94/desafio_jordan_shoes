import { Container, Link, Text } from "./styles";

function Footer() {
  return (
    <Container>
      <Text>
        Todos os direitos reservados.
      </Text>
      <Text>
        ⌨ com ♥ por <Link href="https://www.linkedin.com/in/andssilva/" target="_blank">Anderson Silva (Andy)</Link> 😊
      </Text>
    </Container>
  )
}

export default Footer;