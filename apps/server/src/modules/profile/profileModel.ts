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
      unique: true, 
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
        },
        linkedin: {
          type: String,
        },
        X: {
          type: String,
        },
        twitch: {
          type: String,
        },
        youtube: {
          type: String,
        },
      }
      
  },
  {
    collection: 'Profile',
    timestamps: true,
  },
)

ProfileSchema.pre<Profile>('save', async function (next) {
    const existingProfile = await ProfileModel.findOne({ page: this.page });
    if (existingProfile && !existingProfile._id.equals(this._id)) {
      const error = new Error('Já existe um perfil com esta página.');
      next(error);
    } 
    next()
});


export const ProfileModel = mongoose.model<ProfileDocument>('Profile', ProfileSchema)

export type { ProfileDocument }
