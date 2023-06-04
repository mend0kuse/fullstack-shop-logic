import { Cart } from '../models/Cart.js';

class CartController {
	async getByUserId(req, res) {
		try {
			const cart = await Cart.findOne({ userId: req.params.id })
				.populate({ path: 'virtualProducts' })
				.populate({ path: 'virtualUser' });

			return res.status(200).json(cart);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

	async deleteProduct(req, res) {
		try {
			const cart = await Cart.updateOne({ userId: req.params.userId }, { $pull: { products: req.params.productId } })

			res.status(201).json(cart);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

	async addProduct(req, res) {
		try {
			const cart = await Cart.updateOne({ userId: req.params.userId }, { $push: { products: req.params.productId } })

			res.status(201).json(cart);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

	async clear(req, res) {
		try {
			const cart = await Cart.updateOne({ userId: req.params.userId }, { $set: { products: [] } })

			res.status(201).json(cart);
		} catch (e) {
			res.status(500).json(e);
		}
	}
}

export default new CartController()
