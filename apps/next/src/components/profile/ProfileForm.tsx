import * as yup from 'yup';
import { Button } from "@repo/ui/button";
import { Form, toast } from "@repo/ui/index";
import { Input } from "@repo/ui/input";

import Image from "next/image";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ProfileMutation } from "./createProfile";
import { useMutation } from "react-relay";
import { createProfileMutation$data } from "../../__generated__/createProfileMutation.graphql";
import { useRouter } from "next/navigation"
import { addBar } from "@/utils/addBar";

const socialMedia = yup.object().shape({
  instagram: yup.string(),
  X: yup.string(),
  twitch: yup.string(),
  youtube: yup.string(),
});

const schema = yup.object({
  page: yup.string().required('Required').trim(),
  pixKey: yup.string().required('Required'),
  description: yup.string(),
  socialMedia: socialMedia,
});

const resolver = yupResolver(schema);

type FormValues = yup.InferType<typeof schema>;

export default function ProfileForm () {
  const router = useRouter()
  const { register, handleSubmit } = useForm<FormValues>({
    resolver,
  });

  const [request] = useMutation(ProfileMutation)

  function onSubmit(form: FormValues) {
    request({
      variables: {
        page: addBar(form.page),
        pixKey: form.pixKey,
        description: form.description,
        socialMedia: form.socialMedia
      },
      onError() {
        toast.error("Algo deu errado :(", {
          description: "Tente novamente"
      })
      },
      onCompleted(response: {} | null) {
        const { profileRegisterMutation } = response as createProfileMutation$data;
        const page = profileRegisterMutation?.profileEdge?.node?.page
        
        toast(`Perfil criado 🥳`, {
            description: "Mande seu perfil para as pessoas mandarem perguntas",
        })
        router.push(`/${page}`);
      },
    });
  }

  return (
    <div className="p-4 bg-white rounded-t-2xl shadow-lg overflow-hidden">
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex-row flex-col flex w-full">
        <div className="flex flex-col gap-4 w-full">
          <p className="font-normal w-10/12">
            Crie seu primeiro{" "}
            <span className="text-orange-500 bold">cartão</span>{" "}
            para receber perguntas
          </p>
          <div>
            <Input
              type="text"
              id="namepage"
              maxLength={15}
              className={`border bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5`}
              placeholder="/suapagina"
              required
              {...register("page")}
            />
            <p className="text-sm mt-2">Saia do campo para verificar.</p>
          </div>
          <div className="flex gap-2">
            <Input
              type="text"
              id="pixkey"
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-8/12 p-2.5`}
              placeholder="Chave pix"
              required
              {...register("pixKey")}
            />
            <button className="border rounded border-gray-300 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000000"
                viewBox="0 0 256 256">
                <path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path>
              </svg>
            </button>
          </div>
          <textarea
            rows={3}
            maxLength={150}
            className="bg-gray-50 resize-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
            placeholder="Descrição"
            {...register("description")}
          />
        </div>
        <div className="w-full flex flex-col gap-2 mt-8 md:mt-0">
          <p className="font-normal w-10/12">
            Você também pode incluir suas redes sociais no seu cartão
          </p>
          <div className="flex gap-2">
            <Image
              src="/social/instagram.svg"
              alt="Social media icone"
              width={32}
              height={32}
            />
            <Input
              type="text"
              id="instagram"
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-8/12 p-2.5`}
              placeholder="adicione o link"
              {...register("socialMedia.instagram")}

            />
          </div>
          <div className="flex gap-2">
            <Image
              src="/social/X.svg"
              alt="Social media icone"
              width={32}
              height={32}
            />
            <Input
              type="text"
              id="x"
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-8/12 p-2.5`}
              placeholder="adicione o link"
              {...register("socialMedia.X")}
            />
          </div>
          <div className="flex gap-2">
            <Image
              src="/social/twitch.svg"
              alt="Social media icone"
              width={32}
              height={32}
            />
            <Input
              type="text"
              id="twitch"
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-8/12 p-2.5`}
              placeholder="adicione o link"
              {...register("socialMedia.twitch")}
            />
          </div>
          <div className="flex gap-2">
            <Image
              src="/social/youtube.svg"
              alt="Social media icone"
              width={32}
              height={32}
            />
            <Input
              type="text"
              id="youtube"
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-8/12 p-2.5`}
              placeholder="adicione o link"
              {...register("socialMedia.youtube")}
            />
          </div>
        </div>
      </div>
      <Button
        type="submit"
        className="w-full p-4 bold text-white rounded-lg mt-4 bg-orange-500 hover:bg-orange-600"
      >
        Finalizar cadastro
      </Button>
      </Form>
    </div>
  );
}
