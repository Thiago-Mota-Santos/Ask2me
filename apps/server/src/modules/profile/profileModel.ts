import mongoose, { Document, Types, Schema } from 'mongoose'
import { Maybe } from '../../../../../packages/types/src/Maybe'

export type Profile = {
  page: string
  pixKey: string
  description: string
  createdAt: Date
  socialMedia: {
    instagram: string
    whatsapp: string
    linkedin: string
    X: string
    twitch: string
    youtube: string
  }
  profileId: Types.ObjectId
  _id: Types.ObjectId
} & Document

type ProfileDocument = Maybe<Document> & Profile

const ProfileSchema = new mongoose.Schema<Profile>(
  {
    profileId: {
        ref: "User",
        type: Schema.Types.ObjectId
    },

    page: {
      type: String,
      required: true,
      min: 3,
      max: 15,
    },
    pixKey: {
      type: String,
      required: true,
      max: 32,
    },
    description: {
      required: false,
      type: String,
      max: 300,
    },
    socialMedia: {
          instagram: {
        type: String,
        required: false,
      },
      whatsapp: {
        type: String,
        required: false,
      },
      linkedin: {
        type: String,
        required: false,
      },
      X: {
        type: String,
        required: false,
      },
      twitch: {
        type: String,
        required: false,
      },
      youtube: {
        type: String,
        required: false,
      },
    }
  },
  {
    collection: 'Profile',
    timestamps: true,
  },
)


export const ProfileModel = mongoose.model<ProfileDocument>('Profile', ProfileSchema)

export type { ProfileDocument }
