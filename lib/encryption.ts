import CryptoJS from "crypto-js";

export function encryptKey(passkey: string): string {
  return CryptoJS.AES.encrypt(passkey, "accessKeySecret").toString();
}

export function decryptKey(ciphertext: string): string {
  const bytes = CryptoJS.AES.decrypt(ciphertext, "accessKeySecret");
  return bytes.toString(CryptoJS.enc.Utf8);
}
