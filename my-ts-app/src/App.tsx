import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Homepage, DetailPage, Dashboard, ProductPage, AddProduct, UpdateProductPage, CategoryPage, UpdateCategoryPage, AddCategoryPage,AddUserPage,UpdateUserPage,UserPage,LoginPage,SignUpPage} from './pages';

import AdminLayout from './layouts/AdminLayOut';
import WebsiteLayout from './layouts/WebsiteLayOut';
import { Product } from './types/product'; // Import kiểu dữ liệu của sản phẩm
import { Category } from './types/category';// Import kiểu dữ liệu của Category
import { User } from './types/user';


function App() {
  const navigate = useNavigate()
  const [products, setProducts] = useState<Product[]>([]); // Sử dụng kiểu dữ liệu IProduct[]
  const [categories, setCategories] = useState<Category[]>([]); // Sử dụng kiểu dữ liệu ICategory[]
  const [users, setUsers] = useState<User[]>([]); // Sử dụng kiểu dữ liệu ICategory[]


  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  const removeProduct = (id: number) => { // Thêm kiểu dữ liệu cho id
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE"
    }).then(() => setProducts(products.filter((item) => item.id !== id))) // Thêm kiểu dữ liệu cho item.id và id
  }
  const addProduct = (product: Product) => { // Thêm kiểu dữ liệu cho product
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
      })
    })
  }
  const onUpdate = (product: Product) => { // Thêm kiểu dữ liệu cho product
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
      })
    })

  }
  
  //Category
  useEffect(() => {
    fetch('http://localhost:3000/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
  }, []);
  
  const removeCategory = (id: number):void => { // Thêm kiểu dữ liệu cho id
    fetch(`http://localhost:3000/categories/${id}`, {
      method: "DELETE"
    }).then(() => setCategories(categories.filter((item) => item.id !== id))) // Thêm kiểu dữ liệu cho item.id và id
  };
  const addCategory = (category: Category) => { // Thêm kiểu dữ liệu cho product
    fetch(`http://localhost:3000/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(category)
    }).then(()=> {
      fetch('http://localhost:3000/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data)
        navigate("admin/category")
      })
    })
  }
  
  const onUpdateCategory = (category: Category) => { // Thêm kiểu dữ liệu cho category
    fetch(`http://localhost:3000/categories/${category.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(category)
    }).then(()=> {
      fetch('http://localhost:3000/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data)
        navigate("admin/category")
      })
    })
  };

//USER
useEffect(() => {
  fetch('http://localhost:3000/users')
    .then((response) => response.json())
    .then((data) => setCategories(data))
}, []);

const removeUser = (id: number):void => { // Thêm kiểu dữ liệu cho id
  fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE"
  }).then(() => setUsers(users.filter((item) => item.id !== id))) // Thêm kiểu dữ liệu cho item.id và id
};
const addUser = (user: User) => { // Thêm kiểu dữ liệu cho product
  fetch(`http://localhost:3000/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then(()=> {
    fetch('http://localhost:3000/users')
    .then((response) => response.json())
    .then((data) => {
      setUsers(data)
      navigate("admin/user")
    })
  })
}

const onUpdateUser = (user: User) => { // Thêm kiểu dữ liệu cho category
  fetch(`http://localhost:3000/users/${user.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then(()=> {
    fetch('http://localhost:3000/users')
    .then((response) => response.json())
    .then((data) => {
      setUsers(data)
      navigate("admin/user")
    })
  })
};
  return (
    <>
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<Homepage products={products} />} />
          <Route path="signup"/>
          <Route path="signin"/>
          <Route path='detail/:id' element={<DetailPage products={products} />} />
        </Route>

        <Route path='/admin' element={<AdminLayout children={undefined} />}>
          <Route index element={<Dashboard />} />
          <Route path='product'>
            <Route index element={<ProductPage products={products} removeProduct={removeProduct} />} />
            <Route path='add' element={<AddProduct addProduct={addProduct} />} />
            <Route path='update/:id' element={<UpdateProductPage onUpdate={onUpdate} products={products} />} />
          </Route>

          <Route path='category'>
            <Route index element={<CategoryPage categories={categories} removeCategory={removeCategory} />} />
            <Route path='add' element={<AddCategoryPage addCategory={addCategory} />} />
            <Route path='update/:id' element={<UpdateCategoryPage onUpdateCategory={onUpdateCategory} categories={categories} />} />
          </Route>

          <Route path='user'>
            <Route index element={<UserPage users={users} removeUser={removeUser} />} />
            <Route path='add' element={<AddUserPage addUser={addUser} />} />
            <Route path='update/:id' element={<UpdateUserPage onUpdateUser={onUpdateUser} users={users} />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;

