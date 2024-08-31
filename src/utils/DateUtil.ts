import dayjs, { Dayjs } from "dayjs";

export type DateStr = string;
const formatDateStr = "YYYY-MM-DD";
const formatDot = "YY.MM.DD";

class _DateUtil {
  now = () => dayjs();
  nowFormat = () => this.now().format(formatDateStr);
  nowISO = () => this.now().toISOString();
  format = (d: string | Date | Dayjs) => dayjs(d).format(formatDateStr);
  formatDot = (d: string | Date | Dayjs) => dayjs(d).format(formatDot);
}

const DateUtil = new _DateUtil();

export default DateUtil;
