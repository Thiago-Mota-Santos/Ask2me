import { DeepPartial } from "../../../../../../packages/types/src";
import { getCounter } from "../../../../test/counters";
import { createUser } from "../../user/fixture/createUser";
import { Profile, ProfileDocument, ProfileModel } from "../profileModel";
import crypto from "node:crypto"

export const createProfile = async (args?: DeepPartial<Profile>): Promise<ProfileDocument> =>{
    const i = getCounter('profile');

    const user = await createUser()

    return new ProfileModel({
        page: `page-${i}`,
        description: `description-${i}`,
        socialMedia: {
            instagram: `https://instagram.com/${i}`
        },
        pixKey: crypto.randomUUID(),
        _id: user._id,
        ...args
    }).save()
}

