import Header from '../Components/Header';
import Drawer from '../Components/Drawer';
import Card from '../Components/Card'

function Orders({isVisible, setIsVisible, drawerItems, orderItems, setOrderItems}){
    return(
        <>
        <Header isVisible={isVisible} setIsVisible={setIsVisible}/>
        <Drawer drawerItems={drawerItems} isVisible={isVisible} setIsVisible={setIsVisible} />
        <div className="content">
        <div className="ds-f">
           {orderItems.map((elem, index) => <Card drawerItems={drawerItems} setOrderItems={setOrderItems} 
           title={elem.title} price={elem.price} imageUrl={elem.imageUrl} key={index}/>) }
        </div>
        </div>
        </>
    );
}

export default Orders;