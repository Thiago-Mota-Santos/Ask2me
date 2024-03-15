import { Environment, Store, RecordSource } from "relay-runtime";
import { getNetwork, IS_SERVER } from "./network";

export const getEnvironment = () => {
  const network = getNetwork();
  
  const store = new Store(new RecordSource(), {})

  return new Environment({ network, store, isServer: IS_SERVER });
}