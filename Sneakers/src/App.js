
import React, { useEffect, useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Pages/Home';
import Orders from './Pages/Orders';
import Drawer from './Components/Drawer';
import Form from './Pages/Form';
import NotFound from './Pages/NotFound';
import Favourites from './Pages/Favourites';
import { ApolloProvider, useQuery } from '@apollo/client';
import { client } from './apolloClient';
import { FIND_MANY_CUSTOMERS, FIND_MANY_PRODUCTS } from './graphql/querys';

// const sneakersArr = [
//   {
//     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
//     price: 12999,
//     imageUrl: '/img/sneakers/1.png',
//   },
//   { title: 'Мужские Кроссовки Nike Air Max 270', 
//   price: 15600, 
//   imageUrl: '/img/sneakers/2.png' 
//   },
//   {
//     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
//     price: 8499,
//     imageUrl: '/img/sneakers/3.png',
//   },
//   {
//     title: 'Кроссовки Puma X Aka Boku Future Rider',
//     price: 8999,
//     imageUrl: '/img/sneakers/4.png',
//   },
// ];

function App() {
  const [sneakersArr, setSneakersArr] = useState([]);
  const { data, error, loading } = useQuery(FIND_MANY_PRODUCTS);
  const [isVisible, setIsVisible] = React.useState(true); //отслеживаем состояние корзины

  const [drawerItems, setDrawerItems] = React.useState([]);

  const [orderItems, setOrderItems] = React.useState([]);

  useEffect(()=>{
    console.log("findManyProducts: ", data)
    // setSneakersArr(data.findManyProducts)
  }, [data])

  return (
  //  <ApolloProvider client={client}>
      <div className="wrapper">
        <Routes>
          <Route path="/" 
            element={
              <Home 
                orderItems={orderItems}
                setOrderItems={setOrderItems} 
                drawerItems={drawerItems}
                setDrawerItems={setDrawerItems} isVisible={isVisible} 
                setIsVisible={setIsVisible}
                sneakersArr={sneakersArr} />
              }
            >
          </Route>

          <Route path="/orders" element={<Orders isVisible={isVisible} setIsVisible={setIsVisible} 
            drawerItems={drawerItems} orderItems={orderItems} setOrderItems={setOrderItems} />}>
          </Route>

          <Route path="/form" element={<Form />}>
          </Route>

          <Route path="*" element={<NotFound />}>
          </Route>

          <Route path="/favourites" element={<Favourites isVisible={isVisible} setIsVisible={setIsVisible} />}>
          </Route>
        </Routes>
        
      </div>
    // </ApolloProvider>
  );
}

export default App;
