import axios from "axios";

const URL = process.env.API_KEY;

const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "X-RapidAPI-Key": "d872c175c7mshf8ff7d04ee212abp1411fajsnc4f69c82829f",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

export const getPLaces = async () => {
  try {
    const { data: data } = await axios.get(URL, options);
    return data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
