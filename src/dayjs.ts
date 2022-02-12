import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear.js';
import isoWeek from 'dayjs/plugin/isoWeek.js';

import localizedFormat from 'dayjs/plugin/localizedFormat.js';
import 'dayjs/locale/de.js';

dayjs.locale('de');
dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);
dayjs.extend(localizedFormat);

export default dayjs;
