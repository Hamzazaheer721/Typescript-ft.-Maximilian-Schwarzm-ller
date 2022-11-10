- startOf
- It will mutate the original moment to the start of the time given.


- ////////////////////////////////////////////////
- /////////////// YEAR vs QUARTER ///////////////
- //////////////////////////////////////////////

- const date = new Date(
    "Wed Aug 09 2022 12:00:00 GMT+0500 (Pakistan Standard Time"
  );
- const startDate = moment(date);

-  const currentDate = moment().format();

-  const startOfYear = moment().startOf("year").format();
-  const startOfYearManually = moment()
    .milliseconds(0)
    .seconds(0)
    .minutes(0)
    .hours(0)
    .date(1)
    .month(0)
    .format();

-  we have 4 quarters in a year
-  Jan - mar, apr - jun, july - sept, oct - dec
-  startOf('year') and startOf('quarter') are similar
-  start of year will take the moment to start of the year
-  start of quarter will take to the starting month of current quarter
-  e.g If I am inserting August as month, then my month will be set to july (7th month)
-  const startOfQuarter = startDate.startOf("quarter").format();

- ////////////////////////////////////////////////
- ///////////////// MONTH ///////////////////////
- //////////////////////////////////////////////

- const startOfMonth = moment().startOf("month").format();
-  const startOfMonthManually = moment()
    .milliseconds(0)
    .seconds(0)
    .minutes(0)
    .hours(0)
    .date(1)
    .format();
    

- ////////////////////////////////////////////////
- ///////////////// WEEK vs ISO-WEEK ////////////
- //////////////////////////////////////////////

- Week starts the time from the first day of the week (Sunday).
- ISO-Week starts the time from the first day of the week (Monday) according to ISO.


- ////////////////////////////////////////////////
- ///////////////// DAY vs Date /////////////////
- //////////////////////////////////////////////

- Both start the time from the from 12AM or by resetting time to 00:00:00.

- const date = new Date(
    "Tue Aug 09 2022 15:31:24 GMT+0500 (Pakistan Standard Time"
  );

-  const startOfDay = moment(date).startOf("day").format();
-  const startOfDate = moment(date).startOf("date").format();

-  const startOfDayDateManually = moment(date)
-    .milliseconds(0)
-    .seconds(0)
-    .minutes(0)
-    .hours(0)
-    .format();

-  console.info({
    startDate: moment(date).format(),
    startOfDay,
    startOfDate,
    startOfDayDateManually
  });


- ////////////////////////////////////////////////
- ///////////////// HOUR ////////////////////////
- //////////////////////////////////////////////

- Resets the hour => minutes, seconda and milliseconds of the hour are reset 
- e.g => 21:51:35 => 21:00:00

- const startOfHour = moment(date).startOf("hour").format();

-  const startOfHourManually = moment(date)
    .milliseconds(0)
    .seconds(0)
    .minutes(0)
    .format();

-  console.info({
    startDate: moment(date).format(),
    startOfHour,
    startOfHourManually
  });
