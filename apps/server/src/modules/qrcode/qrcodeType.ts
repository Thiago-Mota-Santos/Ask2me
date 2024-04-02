import { GraphQLFloat, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import { connectionDefinitions, globalIdField } from 'graphql-relay'
import { nodeInterface, registerTypeLoader } from '../../node/typeRegister'
import { QrCode } from './qrcodeModel'
import { QrCodeLoader } from './qrcodeLoader'

export const QrCodeType = new GraphQLObjectType<QrCode>({
  name: 'QrCode',
  description: 'Represents the generated QRCode',
  fields: () => ({
    id: globalIdField('Qrcode'),
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (qrcode) => qrcode.name,
    },
    identifier: {
        type: new GraphQLNonNull(GraphQLString),
        resolve: (qrcode) => qrcode.identifier,   
      },
      correlationID: {
        type: new GraphQLNonNull(GraphQLString),
        resolve: (qrcode) => qrcode.correlationID,
      },
      value: {
        type: new GraphQLNonNull(GraphQLFloat),
        resolve: (qrcode) => qrcode.value,
      },
      image: {
        type: GraphQLString,
        resolve: async (qrCode, _, __) => {
          if (qrCode?.image) {
            return qrCode?.image;
          }

          return null
        },
    },
}),
  interfaces: () => [nodeInterface],
})


export const QrCodeConnection = connectionDefinitions({
  name: 'QrCode',
  nodeType: QrCodeType,
})

registerTypeLoader(QrCodeType, QrCodeLoader.load)
