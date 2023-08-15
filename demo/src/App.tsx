import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Homepage, DetailPage, ProductPage, AddProduct, UpdateProductPage,LoginPage,SignUpPage} from './pages';

import AdminLayout from './layouts/AdminLayOut';
import WebsiteLayout from './layouts/WebsiteLayOut';
import { Product } from './types/product';


function App() {
  const navigate = useNavigate()
  const [products, setProducts] = useState<Product[]>([]);

//confirm toast
  interface ConfirmToastProps {
    onConfirm: () => void;
    onCancel: () => void;
  }
  
  const ConfirmToast: React.FC<ConfirmToastProps> = ({ onConfirm, onCancel }) => (
    <div>
      <span>Bạn có muốn xóa sp này không?</span>
      <button onClick={onConfirm}>có</button>
      <button onClick={onCancel}>không</button>
    </div>
  );
  //

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  const removeProduct = (id: number) => {
    const confirmId = toast(<ConfirmToast 
      onConfirm={() => {
        toast.dismiss(confirmId);
        fetch(`http://localhost:3000/products/${id}`, {
          method: "DELETE"
        }).then(() => {
          setProducts(products.filter((item) => item.id !== id));
          toast.success("Xóa sản phẩm thành công!");
        });
      }}
      onCancel={() => toast.dismiss(confirmId)}
    />, {
      autoClose: false,
    });
  };
    
  const addProduct = (product: Product) => {
    if (!product.name || !product.price || !product.desc) {
      toast.error("Vui lòng điền đầy đủ thông tin sản phẩm.");
      return;
    }
  
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    }).then(()=> {
      fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        navigate("admin/product")
        toast.success("Sản phẩm đã được thêm thành công!");
      })
    })
  };
  const onUpdate = (product: Product) => {

    if (!product.name || !product.price || !product.desc) {
      toast.error("Vui lòng điền đầy đủ thông tin sản phẩm.");
      return;
    }

    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    }).then(()=> {
      fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        navigate("admin/product")
        toast.success("Cập nhật sản phẩm thành công!");
      })
    })
  };
  
  return (
    <>
    <ToastContainer />
      <Routes>

        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<Homepage products={products} />} />
          <Route path='detail/:id' element={<DetailPage products={products} />} />
          <Route path="signup"/>
          <Route path="signin"/>
        </Route>

        <Route path='/admin' element={<AdminLayout children={undefined} />}>
          <Route path='product'>
            <Route index element={<ProductPage products={products} removeProduct={removeProduct} />} />
            <Route path='add' element={<AddProduct addProduct={addProduct} />} />
            <Route path='update/:id' element={<UpdateProductPage onUpdate={onUpdate} products={products} />} />
          </Route>
        </Route>
        
      </Routes>
    </>
  )
}

export default App;
