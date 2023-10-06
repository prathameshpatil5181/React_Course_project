import { uiActions } from "./ui-slice";
import { cartAction } from "./cart-slice";

export const fetchCartData = ()=>{
    return ( async (dispatch) =>{
        
            dispatch(
              uiActions.showNotification({
                status: "Pending",
                title: "Fetching",
                message: "Fetching Cart Data!",
              })
            );

            
        const fetchData = async()=>{
                const Response = await fetch(
                  "https://redux-store-97a50-default-rtdb.firebaseio.com/cart.json",
                 
                );
          
                if (!Response.ok) {
                  dispatch(
                    uiActions.showNotification({
                      status: "error",
                      title: "Error",
                      message: "Sending Cart Data Failed!",
                    })
                  );
                }
              const data = Response.json();
              return data;
        }
        try{
            const cartData = await fetchData();
            dispatch(cartAction.replaceCart({
                items:cartData.items || [],
                totalQuantity : cartData.totalQuantity
            }));
        }
        catch(error){
            dispatch(
                uiActions.showNotification({
                  status: "error",
                  title: "Error",
                  message: "fetching Cart Data Failed!",
                })
              );
        }

        dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success",
              message: "fetched Cart Data!",
            })
          );
    })
}





export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          status: "Pending",
          title: "Sending",
          message: "Sending Cart Data!",
        })
      );
  
      const sendRequest = async () => {
        const Response = await fetch(
          "https://redux-store-97a50-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify({
                items:cart.items,
                totalQuantity:cart.totalQuantity
            }),
          }
        );
  
        if (!Response.ok) {
          dispatch(
            uiActions.showNotification({
              status: "error",
              title: "Error",
              message: "Sending Cart Data Failed!",
            })
          );
        }
      };
  
      try {
        await sendRequest();
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error",
            message: "Sending Cart Data Failed!",
          })
        );
      }
  
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent Successfully",
        })
      );
    };
  };