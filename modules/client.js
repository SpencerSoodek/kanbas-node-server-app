import axios from "axios";
const COURSES_URL = "http://localhost:4000/api/courses";

export const updateModule = async (module) => {
    const response = await axios.
      put(`${MODULES_URL}/${module._id}`, module);
    return response.data;
  };
  

export const createModule = async (courseId, module) => {
    const response = await axios.post(
      `${COURSES_URL}/${courseId}/modules`,
      module
    );
    return response.data;
  };

  
export const findModulesForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};

export const signup = async (credentials) => {
  const response = await axios.post(
    `${USERS_API}/signup`, credentials);
  return response.data;
};

