import mongoose, { Document, Schema, Types } from 'mongoose';
import { getDefaultIdentifier, uuid } from '../../../test/getDefaultIdentifier';
import { Maybe } from '../../../../../packages/types/src/Maybe';

export interface QrCode {
  _id: Types.ObjectId;
  name: string;
  identifier?: string;
  correlationID: string;
  value?: number;
  createdAt: Date;
  updatedAt: Date;
  image: string;
}

type QrCodeDocument = Maybe<Document> & QrCode;

const QrCodeSchema = new Schema<QrCodeDocument>({
  name: {
    type: String,
    description: 'QrCode name',
    required: true,
    trim: true,
    es_indexed: true,
  },
  identifier: {
    type: String,
    description: 'identifier of this qrcode',
    index: true,
    trim: true,
    default: () => getDefaultIdentifier(),
  },
  correlationID: {
    type: String,
    default: () => uuid(),
    description: 'correlation ID of this transaction',
    index: true,
    trim: true,
  },
  value: {
    type: Number,
    description: 'value of this qrcode in cents',
  },
  image: {
    type: String,
    description: 'qr code image url',
  },
}, {
  collection: 'QrCode',
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
});

export const QrCodeModel = mongoose.model<QrCodeDocument>('QrCode', QrCodeSchema);
