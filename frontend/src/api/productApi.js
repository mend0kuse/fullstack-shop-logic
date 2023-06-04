import axios from 'axios'

class ProductApi {
	async getAllProducts() {
		const response = await axios.get('http://localhost:5000/product')
		return response.data
	}
	async getProductById(id) {
		const response = await axios.get('http://localhost:5000/product/' + id)
		return response.data
	}
	async createProduct(newProduct) {
		const response = await axios.post('http://localhost:5000/product', {
			newProduct
		})
		return response.data
	}
	async updateProduct(id, newProduct) {
		const response = await axios.put('http://localhost:5000/product/' + id, {
			newProduct
		})
		return response.data
	}
	async deleteProduct(id) {
		const response = await axios.delete('http://localhost:5000/product/' + id)
		return response.data
	}
}

export const productApi = new ProductApi()