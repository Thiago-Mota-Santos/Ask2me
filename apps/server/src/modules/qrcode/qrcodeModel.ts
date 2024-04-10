import mongoose, { Document, Types } from 'mongoose';
import { getDefaultIdentifier, uuid } from '../../../test/getDefaultIdentifier';
import { Maybe } from '../../../../../packages/types/src/Maybe';

export interface QrCode {
  _id: Types.ObjectId;
  name: string;
  status: string;
  identifier?: string;
  correlationID: string;
  value?: number;
  createdAt: Date;
  updatedAt: Date;
  image: string;
  brcode: string
}

type QrCodeDocument = Maybe<Document> & QrCode;

export const PAYMENT_STATUS = {
  OPEN: 'OPEN',
  PAIED: 'PAIED',
};

const QrCodeSchema = new mongoose.Schema<QrCodeDocument>({
  name: {
    type: String,
    description: 'QrCode name',
    required: true,
    trim: true,
    es_indexed: true,
  },
  status: {
    type: String,
    default: PAYMENT_STATUS.OPEN,
    enum: Object.values(PAYMENT_STATUS),
    index: true,
    description: 'The status of qr code static payment',
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
  brcode: {
    type: String,
    description: "br code"
  }
}, {
  collection: 'QrCode',
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
},
);


export const QrCodeModel = mongoose.model<QrCodeDocument>('QrCode', QrCodeSchema);
