import mongoose from 'mongoose';
import { Schema } from 'mongoose';


const CartSchema = new mongoose.Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
	,
	products: [{
		type: Schema.Types.ObjectId,
		ref: 'Product'
	}],
}, { timestamps: true });

CartSchema.virtual('virtualProducts', {
	ref: 'Product',
	localField: 'products',
	foreignField: '_id',
});

CartSchema.virtual('virtualUser', {
	ref: 'User',
	localField: 'userId',
	foreignField: '_id',
});

CartSchema.set('toObject', { virtuals: true });
CartSchema.set('toJSON', { virtuals: true });

export const Cart = mongoose.model('Cart', CartSchema)
