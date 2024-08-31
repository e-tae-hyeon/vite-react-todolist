import dayjs, { Dayjs } from "dayjs";

export type DateStr = string;
const formatDateStr = "YYYY-MM-DD";

class _DateUtil {
  now = () => dayjs();
  nowFormat = () => this.now().format(formatDateStr);
  format = (d: string | Date | Dayjs) => dayjs(d).format(formatDateStr);
}

const DateUtil = new _DateUtil();

export default DateUtil;
