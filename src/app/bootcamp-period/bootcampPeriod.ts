import { ActiveFlag } from "../shared/enum";
import { BootcampBatch } from '../bacth/batch';
import { StudiPeriod } from '../studi-period/studiPeriod';

export class BootcampPeriod {
    bootcampPeriodId: Number;
    batchId: BootcampBatch;
    weekId: StudiPeriod;
    description: Text;
    activeFLag: ActiveFlag;
}