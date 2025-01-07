import React, { useEffect, useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    },[]);

    const navigate = useNavigate();
    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User successfull logout');
        setTimeout(() => {
            navigate('/login');
        },1000)
    }

    const fetchProducts = async () => {
        try {
            const url = "http://localhost:8080/products";
            const response = await fetch(url, {
                headers:{
                    'Authorization' : localStorage.getItem('token')
                }
            });
            const result = await response.json();
            // console.log(result);
            setProducts(result);
            
        } catch (error) {
            handleError(error);
        }
    }

    useEffect(()=>{
        fetchProducts();
    },[])

  return (
    <>
      <p>Welcome</p>{loggedInUser}
      <br />
      <button onClick={handleLogout}>Logout</button>

      <div>
        {
            products && products.map((product,index) =>(
                    <ul key={index}>
                        <span>{product.name} : {product.price}</span>
                    </ul>
                )
            )
        }
      </div>
      <ToastContainer/>
    </>
  )
}

export default Home
