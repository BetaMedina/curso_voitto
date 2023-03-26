import { readFile, writeFile } from "fs/promises"
const FILE_DIR = "./courses.db.json"

export const listCourses = async () => {
  try {
    const courses = await readFile(FILE_DIR)
    return JSON.parse(courses)
  } catch (err) {
    console.log(err)
    return null
  }
}

export const readCourses = async (id) => {
  try {
    const courses = await readFile(FILE_DIR)
    return (JSON.parse(courses)).find(res => res.id === id)
  } catch (err) {
    console.log(err)
    return null
  }
}


export const saveCourse = async (courseInfo) => {
  try {
    const courses = await readFile(FILE_DIR)
    const parsedCourses = JSON.parse(courses)
    if (!parsedCourses) {
      return null
    }
    parsedCourses.push({ ...courseInfo, id: parsedCourses.length + 1 })
    await writeFile(FILE_DIR, JSON.stringify(parsedCourses))
    return true
  } catch (err) {
    console.log(err)
    return null
  }
}

export const updateCourse = async (courseInfo) => {
  try {
    const courses = await readFile(FILE_DIR)
    const parsedCourses = (JSON.parse(course)).filter(res => res.id !== courseInfo.id)
    parsedCourses.push(courseInfo)
    await writeFile(FILE_DIR, JSON.stringify(parsedCourses))
    return true
  } catch (err) {
    console.log(err)
    return null
  }
}

export const deleteCourse = async (id) => {
  try {
    const courses = await readFile(FILE_DIR)
    const parsedCourses = (JSON.parse(courses)).filter(res => res.id !== id)
    if (!parsedCourses?.length) {
      return null
    }
    await writeFile(FILE_DIR, JSON.stringify(parsedCourses))
    return true
  } catch (err) {
    console.log(err)
    return null
  }
}