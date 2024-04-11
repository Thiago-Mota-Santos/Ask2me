import { getDefaultIdentifier, uuid } from "../../../../test/getDefaultIdentifier";
import { pixQrCodePost } from "../../../api/qrCodePost";
import { PAYMENT_STATUS, QrCodeModel } from "../qrcodeModel";

type HandleQrCodeCreateArgs = {
  name: string;
  value?: number;
};

export const qrCodeCreate = async ({ name, value }: HandleQrCodeCreateArgs) => {
  const identifier = getDefaultIdentifier();
  const correlationID = uuid()
  
  const result = await pixQrCodePost({
    payload: {
      name,
      value,
      identifier,
      correlationID,
    },
  });


  if (result.error) {
    return {
      error: result.error,
    };
  }

  const { pixQrCode } = result;

  const qrCode = await new QrCodeModel({
    name: pixQrCode.name,
    identifier: pixQrCode.identifier,
    correlationID: pixQrCode.correlationID,
    image: pixQrCode?.qrCodeImage,
    value: pixQrCode?.value,
    brcode: pixQrCode?.brCode,
    status: PAYMENT_STATUS.OPEN
  }).save();

  return {
    qrCode,
  };
};
