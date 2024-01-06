import { DELETE_PRODUCT } from "./actionType"
import { EDIT_PRODUCT, GET_PRODUCT, PROD_POST_FAIL, PROD_POST_REQ, PROD_POST_SUCC } from "./actionType"
import axios from "axios"



export const postProd = (newProd) => (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({ type: PROD_POST_REQ });

  axios
    .post(
      "https://nykadashboardbackend.onrender.com/api/products/add",
      newProd, 
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      console.log(res.data);
      dispatch({ type: PROD_POST_SUCC, payload: res.data });
    })
    .catch((error) => {
      console.error("Error adding product:", error);
      dispatch({ type: PROD_POST_FAIL, payload: error.message });
    });
};



export const getProd=(paramsobj)=>(dispatch)=>{
    const token=localStorage.getItem("token");
    dispatch({type:PROD_POST_REQ})
    let prod=axios.get("https://nykadashboardbackend.onrender.com/api/products",{
        headers: {
          authorization: `Bearer ${token}`,
        },
        params: paramsobj,
      }).then((res)=>{
// console.log(res.data)
        dispatch({type:GET_PRODUCT,payload:res.data})
    }).catch(()=>{
        dispatch({type:PROD_POST_FAIL})
    })
    return prod;
}
export const editProd=(id,newProd)=>(dispatch)=>{
    const token=localStorage.getItem("token");
    dispatch({type:PROD_POST_REQ})
    let prod=axios.patch(`https://nykadashboardbackend.onrender.com/api/products/update/${id}`,newProd,{
        headers: {
          authorization: `Bearer ${token}`,
        }
      }).then((res)=>{
        dispatch({type:EDIT_PRODUCT})
    }).catch(()=>{
        dispatch({type:PROD_POST_FAIL})
    })
    return prod;
}
export const deleteProd=(id)=>(dispatch)=>{
    const token=localStorage.getItem("token");
    dispatch({type:PROD_POST_REQ})
    let prod=axios.delete(`https://nykadashboardbackend.onrender.com/api/products/delete/${id}`,{
        headers: {
          authorization: `Bearer ${token}`
        }
      }).then((res)=>{
        dispatch({type:DELETE_PRODUCT})
    }).catch(()=>{
        dispatch({type:PROD_POST_FAIL})
    })
    return prod;
}