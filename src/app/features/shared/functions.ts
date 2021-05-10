import * as moment from 'moment';

import { SortEvent } from 'primeng/api';

/****** customSortTable - function used to determine the sort order of the simple table 'PRIMENG'.  */
export function customSortTable(event: SortEvent, formatDate: string) {

    event.data.sort((data1, data2) => {

        let value1 = data1[event.field];
        let value2 = data2[event.field];
        let result = null;

        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;

        else if (typeof value1 === 'string' && typeof value2 === 'string') {
            const aTime = moment(value1, formatDate).format('X');
            const bTime = moment(value2, formatDate).format('X');

            if (!isNaN(parseInt(aTime)) && parseInt(aTime) > 0) {

                if (aTime < bTime) {
                    result = -1;
                } else if (aTime > bTime) {
                    result = 1;
                } else {
                    result = 0;
                }
            }
            else {
                result = value1.localeCompare(value2);
            }
        }
        else
            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
        return (event.order * result);
    });
}

export function formatDate(date: Date) {
    const newDate = moment(date).format('DD/MM/YYYY');
    return newDate;
}