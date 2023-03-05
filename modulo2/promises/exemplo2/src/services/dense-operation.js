import { readFile, writeFile } from "fs/promises"
const FILE_DIR = "./user.json"

export const getUser = async (mail) => {
  try {
    const users = await readFile(FILE_DIR)
    return JSON.parse(users).find(user => mail === user.email)
  } catch (err) {
    console.log(err)
    return null
  }
}

export const saveUser = async (userInfo) => {
  try {
    const users = await readFile(FILE_DIR)
    const parsedUsers = JSON.parse(users)
    if (!parsedUsers) {
      return null
    }
    parsedUsers.push(userInfo)
    await writeFile(FILE_DIR, JSON.stringify(parsedUsers))
    return true
  } catch (err) {
    console.log(err)
    return null
  }
}