import 'dotenv/config'
import { config } from '../config';

export type PixQrCodePostPayload = {
  name: string;
  identifier: string;
  correlationID: string;
  value?: number;
};

export type PixQrCode = {
  name: string;
  value?: number;
  identifier: string;
  correlationID: string;
  paymentLinkID: string;
  createdAt: string;
  updatedAt: string;
  brCode: string;
  paymentLinkUrl: string;
  qrCodeImage: string;
};

type ResponsePayload = {
  pixQrCode: PixQrCode;
  error?: string
};

export const pixQrCodePost = async ({
  payload,
}: {
  payload: PixQrCodePostPayload;
}): Promise<ResponsePayload> => {
  const url = `${config.API_URL_WOOVI}/v1/qrcode-static`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: config.APP_ID_WOOVI as string,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Failed to post data');
    }

    const data: ResponsePayload = await response.json();
   
    return data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};
