import { config } from "../config";

export type SubAccount = {
  pixKey: string
  name: string
};

type ResponsePayload = {
  pixQrCode: SubAccount;
};

export const createSubAccount = async ({
  payload,
}: {
  payload: SubAccount;
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
