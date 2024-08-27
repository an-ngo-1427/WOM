import logo from './logo.svg';
import './App.css';
import {
  Container,
  Grid,
  GridItem,
  Heading
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { productComp } from './components';
import { useEffect } from 'react';
import { getProductsThunk } from './store/product';
function App() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const productsList = Object.values(products)
  console.log('this is products', productsList)

  useEffect(()=>{
    dispatch(getProductsThunk())
  },[])
  return (
    <div>
      <Container className='products-container'>
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
          {!productsList.length ?
          <Heading as='h4' size='md'>
            No products listed
          </Heading>
            : productsList.map(product => <GridItem><productComp product={product}></productComp></GridItem>)
          }
        </Grid>
      </Container>

    </div>
  );
}

export default App;
