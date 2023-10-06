import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import Notification from "./components/UI/Notification";
import { sendCartData,fetchCartData } from "./store/cart-action";
let isInitial = true;
function App() {
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
useEffect(()=>{
dispatch(fetchCartData());
},[dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart));
    }
   
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
