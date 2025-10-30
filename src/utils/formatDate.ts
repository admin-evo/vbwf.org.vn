import moment from "moment";

const formatDate = (dateString: string) => {
  return moment(dateString).format("DD/MM/YYYY");
};

export { formatDate };
