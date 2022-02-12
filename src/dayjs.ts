import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import isoWeek from 'dayjs/plugin/isoWeek';

import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/de';

dayjs.locale('de');
dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);
dayjs.extend(localizedFormat);

export default dayjs;
