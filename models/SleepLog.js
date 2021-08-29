export default class SleepLog {
    constructor(id, 
        {
            bedTime,
            sleepTime,
            hoursSlept,
            wakeUpTime,
            isSpicyFood,
            isAlchohol,
            isSleepMedication,
        }
    ) {
        this.id = id;
        this.bedTime = bedTime;
        this.sleepTime = sleepTime;
        this.hoursSlept = hoursSlept;
        this.wakeUpTime = wakeUpTime;
        this.isSpicyFood = isSpicyFood;
        this.isAlchohol = isAlchohol;
        this.isSleepMedication = isSleepMedication;
    }
}