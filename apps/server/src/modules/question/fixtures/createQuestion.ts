import { getObjectId } from "@entria/graphql-mongo-helpers";
import { DeepPartial } from "../../../../../../packages/types/src";
import { getCounter } from "../../../../test/counters";
import { createProfile } from "../../profile/fixture/createProfile";
import { ProfileModel } from "../../profile/profileModel";
import { createUser } from "../../user/fixture/createUser";
import { Question, QuestionDocument, QuestionModel } from "../questionModel";

export const createQuestion = async (args?: DeepPartial<Question>): Promise<QuestionDocument> =>{
    const i = getCounter('question');

    const user = await createUser()
    
    const profile = await ProfileModel.findOne({ profileId: user._id });
    console.log(profile?._id);
    return new QuestionModel({
        text: `page-${i}`,
        page: 'thiago',
        profileId: profile?._id,
        _id: user._id,
        ...args
    }).save()
}
