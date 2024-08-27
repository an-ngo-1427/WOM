import logo from './logo.svg';
import './App.css';
import {
  Container,
  Grid,
  GridItem
} from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { productComp } from './components';
function App() {

  const products = useSelector(state=>state.products)
  console.log(products)
  const productsList = Object.values(products)
  return (
    <div>
      <Container className='products-container'>
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
          {!productsList ? <h2>No products listed</h2>
            : productsList.map(product=><GridItem><productComp product={product}></productComp></GridItem>)
          }
        </Grid>
      </Container>

    </div>
  );
}

export default App;
