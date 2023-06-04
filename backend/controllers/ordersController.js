import { Order } from '../models/Order.js'
import { Product } from '../models/Product.js'
import { User } from '../models/User.js'

class OrderController {
	async getAll(req, res) {
		try {
			const orders = await Order.find()
				.populate({ path: 'virtualProducts' })
				.populate({ path: 'virtualUser' })

			return res.status(200).json(orders);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

	async createOrder(req, res) {
		try {
			const user = await User.findById({ _id: req.body.userId })

			const order = await Order.create({ userId: user, price: req.body.price });

			for (let i = 0; i < req.body.products.length; i++) {
				const tmp = await Product.findById({ _id: req.body.products[i]._id })
				order.products.push(tmp)
			}

			await order.save()
			res.status(201).json(order);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

	async getByUserId(req, res) {
		try {
			const orders = await Order.find({ userId: req.params.id })
				.populate({ path: 'virtualProducts' })
				.populate({ path: 'virtualUser' });

			return res.status(200).json(orders);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

	async deleteOrder(req, res) {
		try {
			const order = await Order.findByIdAndDelete({ _id: req.params.id })

			res.status(201).json(order);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

}

export default new OrderController()
