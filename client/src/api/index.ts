import axios from "axios"

const apiUrl = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  withCredentials: true
})

export const registerUser = async (payload: {
  hashedPassword: string
  email: string
}) => {
  const res = await apiUrl.post<{ salt: string, vault: string }>('/register', payload)
  return res.data
}
export const loginUser = async (payload: {
  hashedPassword: string
  email: string
}) => {
  const res = await apiUrl.post<{ salt: string, vault: string  }>('/login', payload)
  return res.data
}

export const saveVault = async ({ encryptedVault }: {
  encryptedVault: string
}) => {
  const res = await apiUrl.put('/vault', { encryptedVault })
  return res.data
}
