import { useEffect, useState } from "react";
import { Container, Text } from "./styles";

function Banner() {
  const colors = ['var(--white-200)', 'var(--blue)'];
  const [currentBgColorIndex, setCurrentBgColorIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(colors.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      setCurrentColorIndex((prevIndex) =>
        prevIndex === 0 ? colors.length - 1 : prevIndex - 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [colors.length]);

  const currentBgColor = colors[currentBgColorIndex];
  const currentColor = colors[currentColorIndex];

  return (
    <Container style={{ backgroundColor: currentBgColor, color: currentColor }}>
      <Text>
        Ganhe R$ 10,00 de desconto no frete
      </Text>
    </Container>
  )
}

export default Banner;