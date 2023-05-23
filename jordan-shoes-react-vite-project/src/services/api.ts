import axios from 'axios';

const getAllShoes = async () => {
  const url = "http://localhost:3000/shoes"

  try {
    const response = await axios.get(url)
    return response.data;
  } catch (err) {
    console.error(err)
  }
}

const getShoesById = async (id: number) => {
  const url = `http://localhost:3000/shoes/${id}`

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.error(err)
  }
}

export { getAllShoes, getShoesById }