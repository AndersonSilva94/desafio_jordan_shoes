import { useEffect, useState } from 'react';
import { Container, Legend, SectionCards, Subtitle, Title } from './styles';
import { getAllShoes } from '../../services/api';
import Card from '../../components/Card';

interface CardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

function Home() {
  const [shoes, setShoes] = useState<CardProps[]>([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const getShoes = async () => {
      try {
        const shoes = await getAllShoes();
        setShoes(shoes);
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
      <SectionCards>
        {shoes && shoes.map((shoe) => 
          (<Card
            key={shoe.id}
            title={shoe.title}
            price={shoe.price}
            image={shoe.image}
          />)) }
      </SectionCards>
    </Container>
  )
}

export default Home;