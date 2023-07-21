import React from 'react'

const Homepage = ({ products }) => {
    console.log("Homepage data: ", products);
    return (
        <div>
            {products.map((item, index) => {
                return (
                    <div key={index + 1}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Homepage