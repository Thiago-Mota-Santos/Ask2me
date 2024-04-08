import { fetchGraphQL } from '@/relay/environment';
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url); 
  const profileId = searchParams.get('profileId')?.replace(/^'|'$/g, '').replace(/\\/g, '');
  
  const result = await fetchGraphQL(
    `
    query($profileId: String!) {
      question(profileId: $profileId) {
        text
        page
      }
    }
    `,
    { profileId },
  );
    
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <div tw="flex items-center justify-center">
          <div tw="flex flex-col items-center justify-center bg-gray-200 p-8 rounded-lg">
            <div tw="flex mt-4">
              <span tw="text-orange-500 font-bold text-6xl">Pergunta</span>
            </div>
            <div tw="flex p-12 pt-6">
              <span tw="font-bold text-4xl">{result.data.question.text}</span>
            </div>
            <div tw="flex w-[600px] flex-col items-center justify-center p-6 bg-orange-500 rounded-lg">
              <span tw="text-white text-2xl">Faça uma pergunta também!</span>
              <span tw="text-xl font-bold text-white">{`ask2me-next.vercel.app/${result.page}`}</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
