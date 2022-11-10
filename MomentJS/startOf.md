- startOf
- It will mutate the original moment to the start of the time given.


- ///////////////// year vs quarter /////////////////////////
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
- ///////// /////// MONTH ///////////////// /////
- //////////////////////////////////////////////
- const startOfMonth = moment().startOf("month").format();
-  const startOfMonthManually = moment()
    .milliseconds(0)
    .seconds(0)
    .minutes(0)
    .hours(0)
    .date(1)
    .format();
