import moment from "moment";
import md5 from "md5";

const generateAccessKey = () => {
  const time = moment(new Date()).format("MM/DD/YYYY HH:mm:ss");
  const key: string = process.env.NEXT_PUBLIC_KEY_CERT!;

  return {
    time: time,
    keyCert: md5(`${key}${time}`),
  };
};

export { generateAccessKey };
