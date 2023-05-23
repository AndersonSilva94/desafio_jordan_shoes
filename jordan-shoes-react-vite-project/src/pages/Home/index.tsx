import { useEffect, useState } from 'react';
import { Container, Legend, SectionCards, Subtitle, Title } from './styles';
import { getAllShoes, getShoesById } from '../../services/api';

function Home() {
  const [shoes, setShoes] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const getShoes = async () => {
      try {
        // const shoes = await getAllShoes();
        const shoes = await getShoesById(4)

        setShoes(shoes?.data)
        console.log(shoes)
      } catch (err) {
        setErr(true)
      }
    }

    getShoes()
  }, [])

  return (
    <Container>
      <Legend>
        <Title>Destaques</Title>
        <Subtitle>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</Subtitle>
      </Legend>
      <SectionCards></SectionCards>
    </Container>
  )
}

export default Home;