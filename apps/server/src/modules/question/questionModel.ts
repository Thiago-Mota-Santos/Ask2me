import mongoose, { Document, Types, Schema } from 'mongoose'
import { Maybe } from '../../../../../packages/types/src/Maybe'

export type Question = {
  text: string
  createdAt: Date
  profileId: Types.ObjectId
  _id: Types.ObjectId
} & Document

type QuestionDocument = Maybe<Document> & Question

const QuestionSchema = new mongoose.Schema<Question>(
  {
    profileId: {
        ref: "Profile",
        type: Schema.Types.ObjectId
    },
    text: {
       type: String,
       required: true
    },
  },
  {
    collection: 'Question',
    timestamps: true,
  },
)

export const QuestionModel = mongoose.model<QuestionDocument>('Question', QuestionSchema)

export type { QuestionDocument }
