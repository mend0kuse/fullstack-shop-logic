import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
	title: { type: String, required: true },
	desc: { type: String, required: true },
	category: { type: String, required: true },
	imgSrc: { type: String, required: true },
	price: { type: Number, required: true }
}, { timestamps: true });

export const Product = mongoose.model('Product', ProductSchema)
