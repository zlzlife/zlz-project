// https://www.w3.org/TR/NOTE-datetime
const moment = require("moment");

moment.locale('zh-cn');

moment("2018-01-01 00:00:00", "YYYY-MM-DD HH:mm:ss"); //指定时间
moment('2020-12-14T07:04:47.000Z','YYYY-MM-DDTHH:mm:ss.SSSZ').format('YYYY-MM-DD HH:mm:ss')

moment().valueOf(); // 13位时间戳

moment().unix(); // unix时间戳

moment.unix(1530374400).format("MM/DD/YYYY"); //指定时间戳获取格式

moment().format('L');    // 2018-08-26
moment().format('l');    // 2018-08-26
moment().format('LL');   // 2018年8月26日
moment().format('ll');   // 2018年8月26日
moment().format('LLL');  // 2018年8月26日晚上6点25分
moment().format('lll');  // 2018年8月26日晚上6点25分
moment().format('LLLL'); // 2018年8月26日星期日晚上6点25分
moment().format('llll'); // 2018年8月26日星期日晚上6点25分

moment().endOf('month').format('YYYY-MM-DD HH:mm:ss'); // 获取这个月最后一天
moment().startOf('month').format('YYYY-MM-DD HH:mm:ss'); // 获取这个月第一天

moment().endOf('week').format('YYYY-MM-DD HH:mm:ss'); // 获取这个周最后一天
moment().startOf('week').format('YYYY-MM-DD HH:mm:ss'); // 获取这个周第一天

moment().add(1, 'M').format('YYYY-MM-DD HH:mm:ss'); // 月份加1
moment().add(1, 'd').format('YYYY-MM-DD HH:mm:ss'); // 天数加1

moment().add(-1, 'M').format('YYYY-MM-DD HH:mm:ss'); // 月份加-1
moment().add(-1, 'd').format('YYYY-MM-DD HH:mm:ss'); // 天数加-1

moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss'); // 天数加-1
moment().subtract(1, 'months').format('YYYY-MM-DD HH:mm:ss'); // 月份-1

moment().startOf('year').format('YYYY-MM-DD HH:mm:ss'); // 从今年开始
moment().startOf('month').format('YYYY-MM-DD HH:mm:ss');   // set to the first of this month, 12:00 am
moment().startOf('quarter').format('YYYY-MM-DD HH:mm:ss');  // set to the beginning of the current quarter, 1st day of months, 12:00 am
moment().startOf('week').format('YYYY-MM-DD HH:mm:ss');    // set to the first day of this week, 12:00 am
moment().startOf('isoWeek').format('YYYY-MM-DD HH:mm:ss'); // set to the first day of this week according to ISO 8601, 12:00 am
moment().startOf('day').format('YYYY-MM-DD HH:mm:ss');     // set to 12:00 am today
moment().startOf('hour').format('YYYY-MM-DD HH:mm:ss');    // set to now, but with 0 mins, 0 secs, and 0 ms
moment().startOf('minute').format('YYYY-MM-DD HH:mm:ss');  // set to now, but with 0 seconds and 0 milliseconds
moment().startOf('second').format('YYYY-MM-DD HH:mm:ss');  // same as moment().milliseconds(0);

moment().endOf('day').format('YYYY-MM-DD HH:mm:ss');

moment().weekday(1).format('YYYY-MM-DD'); // 获取本周第一天
moment().weekday(7).format('YYYY-MM-DD'); // 获取本周最后一天

moment('2020-32','YYYY-w').weekday(1).format('YYYY-MM-DD');
moment('2020-32','YYYY-w').weekday(7).format('YYYY-MM-DD');

// ‌03,07,08,17,19,23
