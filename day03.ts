//function
// function
// function sum(a: number = 10, b: number = 20): any {
//     const total = a + b;
//     console.log(total);

// }
// sum();


// const getInfo = (id: number, name: string, age: number) => {
//     console.log(id, name, age);
// }
// getInfo(1, 'datlt', 18);

// const getInfo = (info: { id: number, name: string, age: number }) => {
//     const { id, name, age } = info;
//     console.log(id, name, age);
// }
// getInfo({
//     id: 1,
//     name: 'datlt',
//     age: 18
// })

//

// interface GetInfo (info: { id: number, name: string, age: number }) => {
//     const { id, name, age } = info;
//     console.log(id, name, age);
// }
// const myInfo : GetInfo = ({
//     id: 1,
//     name: 'datlt',
//     age: 18
// })

interface Product {
    id: number,
    name: string,
    image: string,
    price: number,
    desc ?: string,
    status: boolean,
}

const  products: Product[] = [
    {id:1,name:'Product 1', image:'https://picsum.photos/100/100 ', price: 200,desc :'Mô tả 1', status:true},
    {id:2,name:'Product 2', image:'https://picsum.photos/100/100 ', price: 300,desc :'Mô tả 2', status:false},
    {id:3,name:'Product 3', image:'https://picsum.photos/100/100 ', price: 400,desc :'Mô tả 3', status:true},
]

//Add product
const addProduct = (newProduct: Product): Product =>{
    products.push(newProduct);
    return newProduct
} 

addProduct({id:4,name:'Product 4', image:'https://picsum.photos/100/100 ', price: 400,desc :'Mô tả 4', status:false})

console.log("addProduct:",addProduct);

//Update product
// const updateProduct = () {
    
//     console.log('Update product compelete!')
// }

//Remove product
// const removeProduct(id) {
//     console.log('remove product ')
// }