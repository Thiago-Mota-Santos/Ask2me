import { GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql"
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay"
import { QrCode } from "../qrcodeModel"
import { GraphQLContext } from "../../../graphql/context"
import { qrCodeCreate } from "../create/qrCodeCreate"
import { QrCodeConnection } from "../qrcodeType"
import { QrCodeLoader } from "../qrcodeLoader"
import { successField } from "@entria/graphql-mongo-helpers"

const QrCodeRegisterMutation = mutationWithClientMutationId({
    name: 'QrCodeRegister',
    description: 'add a new qrcode',
    inputFields: {
      name: {
        type: new GraphQLNonNull(GraphQLString),
      },
      value: {
        type: GraphQLInt
      }
    },

  mutateAndGetPayload: async (args: QrCode) => {
    const { name, value } = args
    
    const { qrCode, error } = await qrCodeCreate({
        name,
        value,
      });

      if(error) {
        throw new Error(error)
      }

    return {
      id: qrCode?._id.toString(),
      success: 'New qrcode has been created',
    }
  },
  outputFields: {
    profileEdge: {
      type: QrCodeConnection.edgeType,
      resolve: async ({ id }, _, context) => {
        const qrCode = await QrCodeLoader.load(context, id)
        if (!qrCode) return null

        return {
          cursor: toGlobalId('QrCode', qrCode._id),
          node: qrCode,
        }
      },
      ...successField,
    },
  },
})

export { QrCodeRegisterMutation }
