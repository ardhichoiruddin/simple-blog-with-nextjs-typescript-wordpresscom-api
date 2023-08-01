import dayjs from "dayjs";

export const dateToHuman = (date: string) => {
  return dayjs(new Date(date)).format("DD MMMM YYYY");
};
