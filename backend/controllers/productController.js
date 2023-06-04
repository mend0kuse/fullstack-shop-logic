import { Product } from '../models/Product.js'

class ProductController {
	async getAll(req, res) {
		try {
			const products = await Product.find().sort({ "createdAt": "asc" });
			return res.status(200).json(products);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

	async getById(req, res) {
		const productId = req.params.id;

		try {
			const product = await Product.findById(productId);

			return res.json(product);
		} catch (e) {
			console.log(e);
			return res.status(500).json(e);
		}

	}

	async createProduct(req, res) {
		try {
			await Product.create({ ...req.body.newProduct })
			const products = await Product.find()
			res.status(201).json(products);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

	async updateById(req, res) {
		try {
			const product = await Product.updateOne({ _id: req.params.id }, { ...req.body.newProduct })
			res.status(201).json(product);
		} catch (e) {
			console.log(e);
			res.status(500).json(e);
		}
	}

	async deleteById(req, res) {
		const productId = req.params.id;

		try {
			await Product.findByIdAndDelete(productId);

			const products = await Product.find()

			return res.json(products);
		} catch (e) {
			console.log(e);
			return res.status(500).json(e);
		}

	}
}

export default new ProductController()
