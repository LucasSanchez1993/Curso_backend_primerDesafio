
class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        let id = 1;

        if (this.products.length > 0) {
            id = this.products[this.products.length - 1].id + 1;
        }

        let newProduct = { id, title, description, price, thumbnail, code, stock };
        this.products.push(newProduct);

        let exists = this.products.find(p => p.code === code);
        if (exists) {
            console.log(`El producto con este ${code} ya existe!!`);
            return;
        }
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        return this.products.find(product => product.id === id);
    }
}

let prodManager = new ProductManager();
prodManager.addProduct('arroz', 'blanco', 1000, 'img1', 1, 50);
prodManager.addProduct('leche', 'entera', 500, 'img2', 2, 30);

console.log("Hola");
console.log("Estos son los productos:", prodManager.getProducts());
console.log("Mi producto con ID 2 es:", prodManager.getProductById(2));