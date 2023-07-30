import React from 'react'
import { useState } from 'react';

const AddProductPage = ({ addProduct }) => {
    const [data, setData] = useState({}) // tạo state để lưu giá trị của input
    const onHandleChange = (event) => {
        const { name, value } = event.target; // lấy name và value của input
        const newData = { ...data, [name]: value } // lấy tất cả các giá trị cũ và thêm giá trị mới
        setData(newData); // cập nhật lại state
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        addProduct(data); // gọi hàm addProduct được truyền từ component cha
    }

    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" placeholder='Enter Product Name' onChange={onHandleChange} name='name' />
                <input type="text" placeholder='Enter Product Price' onChange={onHandleChange} name='price' />
                <button>Add New</button>
            </form>
        </div>
    )
}

export default AddProductPage