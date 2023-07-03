import Card from "../Components/Card";
import Drawer from "../Components/Drawer";
import Header from '../Components/Header';
import {useDispatch, useSelector} from 'react-redux';

function Home({drawerItems, setDrawerItems, orderItems, setOrderItems, isVisible, setIsVisible, sneakersArr}){

  const dispatch = useDispatch();
  const inputValue = useSelector(state => state.inputValue); //создали состояние

  function onChangeInput(event){
    dispatch({type: "CHANGE_INPUT", payload: event.target.value})
    console.log(inputValue)
  }
  

    return(
    <>
      <Header isVisible={isVisible} setIsVisible={setIsVisible} />

      <Drawer drawerItems={drawerItems} setDrawerItems={setDrawerItems} isVisible={isVisible} setIsVisible={setIsVisible} 
        orderItems={orderItems} setOrderItems={setOrderItems} />
     
      <div className="content">
            <h1>{inputValue ? `Поиск по: ${inputValue}` : "Все кроссовки"}</h1>
            <div className="search-block">
                <img className="searchImage" src="/img/search.png" width={18} height={18} alt="Search" />
                <input value={inputValue} onChange={(event) => onChangeInput(event)} placeholder="Поиск..." />
                <img onClick={() => dispatch({type: "CLEAR_INPUT"})} className={inputValue ? "crossImage" : "display-none"} 
                src="/img/smallCross.svg" width={21} height={21} alt="Cross" />
            </div>
          
        <div className="ds-f">
           {sneakersArr.filter((elem) => elem.title.toLowerCase().includes(inputValue.toLowerCase())).map((elem, index) => <Card title={elem.title} price={elem.price} 
           imageUrl={elem.imageUrl} drawerItems={drawerItems} setDrawerItems={setDrawerItems} key={index}/>) }
        </div>
      </div>
    </>
    

    );
}

export default Home;