interface DataLoaders {
  UserLoader: ReturnType<
    typeof import('../user/userLoader').UserLoader.getLoader
  >
  ProfileLoader: ReturnType<
    typeof import('../profile/profileLoader').ProfileLoader.getLoader
  >
  QuestionLoader: ReturnType<
    typeof import('../question/questionLoader').QuestionLoader.getLoader
  >
  QrCodeLoader: ReturnType<
    typeof import('../qrcode/qrcodeLoader').QrCodeLoader.getLoader
>
}

type Loaders = { [Name in keyof DataLoaders]: () => DataLoaders[Name] } | Record<string, () => unknown>;

const loaders: Loaders = {}

const registerLoader = <Name extends keyof DataLoaders>(
  key: Name,
  getLoader: () => DataLoaders[Name],
) => {
  loaders[key] = getLoader
}


const getDataLoaders = (): DataLoaders =>

  (Object.keys(loaders) as (keyof DataLoaders)[]).reduce(
    (prev, loaderKey) => ({
      ...prev,
      [loaderKey]: loaders[loaderKey](),
    }),
    {},
  ) as DataLoaders


export type { DataLoaders }
export { registerLoader, getDataLoaders }
