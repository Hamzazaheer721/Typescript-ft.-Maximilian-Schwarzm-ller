- day()
- It returns the day number from Sunday = 0 to Saturday = 6.

- month()
-  It returns the month number from January = 0 to December = 11.

- year()
- It returns the year. 

- e.g 
- const date = new Date(
    "Tue Aug 09 2022 15:31:24 GMT+0500 (Pakistan Standard Time"
  );

-  console.log(moment(date).day()); // 2
-  console.log(moment(date).month()); // 7 
-  console.log(moment(date).year()); // 2022
