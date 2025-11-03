import moment from "moment";

const formatDate = (dateString?: string) => {
  if (!dateString) return "03/11/2025";
  return moment(dateString).format("DD/MM/YYYY");
};

export { formatDate };
