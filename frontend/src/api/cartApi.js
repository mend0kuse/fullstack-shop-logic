import axios from 'axios'

class CartApi {
	async getCartByUserId(userId) {
		const response = await axios.get('http://localhost:5000/cart/' + userId)
		return response.data
	}
	async deleteProduct(userId, productId) {
		const response = await axios.delete('http://localhost:5000/cart/' + userId + '/' + productId)
		return response.data
	}
	async addProduct(userId, productId) {
		const response = await axios.post('http://localhost:5000/cart/' + userId + '/' + productId)
		return response.data
	}
	async clearCart(userId) {
		const response = await axios.put('http://localhost:5000/cart/clear/' + userId)
		return response.data
	}
}

export const cartApi = new CartApi()