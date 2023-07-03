import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

function Header({isVisible, setIsVisible}){

  const dispatch = useDispatch(); //создали диспетчера, который будет далее работать

  const addCash = () => {
    dispatch({type: "ADD_CASH", payload: 1})
  }

const cash = useSelector(state => state.cash); //вытаскиваем из store значение cash
//useSelector - для обращения к state, чтобы вытащить из него какое-либо значение
//console.log(cash);

    return(
    <header>
        
        <Link className="link" to = "/">
        <div>
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        </Link>
        <ul>
          <li className="cursor" onClick={() => setIsVisible(!isVisible)}>
            <img width={18} height={18} src="/img/cart.png" />
            <span>{cash} руб.</span>
          </li>
          <Link to="/favourites">
            <li>
              <img width={18} height={18} src="/img/fav.png" />
            </li>
          </Link>
          
        <Link to="/orders">
          <li>
            <img width={18} height={18} src="/img/user.png" />
          </li>
        </Link>
        </ul>
      </header>
    )
}

export default Header;