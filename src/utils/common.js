import { GOOGLE_BASE_URL } from "../constants/data";

export const formatDate = (dateTime) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = dateTime?.slice(0, 4);
  const month = dateTime?.slice(5, 7);
  const completeMonth = months[Number(month) - 1];
  const date = dateTime?.slice(8, 10);

  return `${date} ${completeMonth},${year}`;
};

export const getMapURL = (lat, lang) => {
  return `${GOOGLE_BASE_URL}/maps?q=${lat},${lang}`;
};
