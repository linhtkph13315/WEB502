// import React from 'react'
// import { useState } from 'react'

// const HomePage = ({ data }) => {
//     const [products, setProducts] = useState(data)
//     const addProduct = (product) => {
//         // product : {id,name,price}
//         setProducts([...products, product])
//     }
//     const deleteProduct = (id) => {
//         const newData = products.filter((product) => product.id !== id)
//         setProducts(newData);
//     }
//     const updateProduct = (id) => {
//         const newData = products.map((product) => {
//             return product.id == id ? { ...product, name: "Product 1 update", price: 100 } : product
//         })
//         setProducts(newData)
//     }
//     return (
//         <div>
//             <button onClick={() => addProduct({ id: 4, name: "Product 4", price: 400 })}>Add New</button>
//             {products.map((product, index) => {
//                 return (
//                     <div key={index + 1}>
//                         <h3>{product.name}</h3>
//                         <p>{product.price}</p>
//                         <button onClick={() => deleteProduct(product.id)}>Delete</button>
//                         <button onClick={() => updateProduct(product.id)}>Update</button>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

// export default HomePage