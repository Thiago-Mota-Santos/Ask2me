import crypto from "node:crypto"

const uuid = () => {
  return crypto.randomBytes(16).toString('hex');
}

const getDefaultIdentifier = () => {
    return uuid().replace(/-/g, '').slice(0, 25)
}

export { getDefaultIdentifier, uuid }