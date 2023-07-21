interface Product {
  id: number | string;
  name: string;
  image: string;
  price: number;
  desc?: string;
  status: boolean;
}

let products: Product[] = [
  { id: 1, name: 'Product 1', image: 'https://picsum.photos/100/100', price: 200, desc: 'Mô tả 1', status: true },
  { id: 2, name: 'Product 2', image: 'https://picsum.photos/100/100', price: 300, desc: 'Mô tả 2', status: false },
  { id: 3, name: 'Product 3', image: 'https://picsum.photos/100/100', price: 400, desc: 'Mô tả 3', status: true },
];

function addProduct(newProduct: Product): void {
  products.push(newProduct);
  console.log('Thêm mới thành công!');
}

function updateProduct(id: number | string, updatedProduct: Partial<Product>): void {
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex !== -1) {
    products[productIndex] = { ...products[productIndex], ...updatedProduct };
    console.log('Cập nhật thành công!');
  } else {
    console.log('Không tìm thấy sản phẩm để cập nhật!');
  }
}

function removeProduct(id: number | string): void {
  const initialLength = products.length;
  products = products.filter((product) => product.id !== id);
  if (products.length < initialLength) {
    console.log('Xóa thành công!');
  } else {
    console.log('Không tìm thấy sản phẩm để xóa!');
  }
}

// Kiểm tra chức năng bằng cách gọi các hàm
addProduct({ id: 4, name: 'Product 4', image: 'https://picsum.photos/100/100', price: 500, status: true });

updateProduct(2, { name: 'Updated Product 2', price: 350 });

removeProduct(3);

console.log(products); // Kiểm tra danh sách sản phẩm sau khi thực hiện các chức năng
