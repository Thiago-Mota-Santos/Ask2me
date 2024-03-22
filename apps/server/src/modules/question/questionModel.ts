import mongoose, { Document, Types, Schema } from 'mongoose'
import { Maybe } from '../../../../../packages/types/src/Maybe'

export type Question = {
  page: string
  text: string
  answer: string
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
       required: true,
       type: String,
    },
    answer: {
      type: String,
    },
    page: {
      type: String
    }
  },
  {
    collection: 'Question',
    timestamps: true,
  },
)

export const QuestionModel = mongoose.model<QuestionDocument>('Question', QuestionSchema)

export type { QuestionDocument }
