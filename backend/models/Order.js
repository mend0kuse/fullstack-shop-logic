import mongoose from 'mongoose';
import { Schema } from 'mongoose';


const OrderSchema = new mongoose.Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
	,
	price: { type: Number, required: true },
	products: [{
		type: Schema.Types.ObjectId,
		ref: 'Product'
	}],
}, { timestamps: true });

OrderSchema.virtual('virtualProducts', {
	ref: 'Product',
	localField: 'products',
	foreignField: '_id',
});

OrderSchema.virtual('virtualUser', {
	ref: 'User',
	localField: 'userId',
	foreignField: '_id',
});

OrderSchema.set('toObject', { virtuals: true });
OrderSchema.set('toJSON', { virtuals: true });

export const Order = mongoose.model('Order', OrderSchema)
