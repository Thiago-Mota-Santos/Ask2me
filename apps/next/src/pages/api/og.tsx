// import { fetchGraphQL } from '@/relay/environment';
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
 
export const config = {
  runtime: 'edge',
};
 
export default async function handler(req: NextRequest) {
  // const { searchParams } = new URL(req.url); 
  // const profileId = searchParams.get('profileId')
  // const result = await fetchGraphQL(
  //     `
  //     query($profileId: String!) {
  //       question(profileId: $profileId) {
  //         text
  //         page
  //       }
  //     }
      
  //     `,
  //     {profileId},
  //   );


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
       <div tw="flex h-screen items-center justify-center">
        <div tw="flex flex-col items-center justify-center max-h-80 bg-gray-200">
          <div tw="flex mt-1">
            <span tw="text-orange-500 font-bold text-2xl">Pergunta</span>
          </div>
          <div tw="flex p-8 pt-2">
            <span tw="font-bold">Você gosta de queijo?</span>
          </div>
          <div tw="flex flex-col items-center justify-center p-2 bg-orange-500 w-full">
            <span tw="text-white">Faça uma pergunta também!</span>
            <span tw="text-sm font-bold text-white">ask2me-next.vercel.app/thiago</span>
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