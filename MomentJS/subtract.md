 - Subtract
    - Subtract is used to subtract time from date;
    - Math.ceil is used on number if it is introduced.
    - e.g
    - moment().subtract(2.4, "months").daysInMonth(); 
    - Here 2.4 is rounded off to 3 and if month is 6 currently then it will become 3 (April).

- Note 
- subtract will change the original moment date too so make copy of the moment day before using subtract on the original one.
- const date = new Date(
    "Wed Dec 09 2022 12:00:00 GMT+0500 (Pakistan Standard Time"
  );

  const startDate = moment(date);

  const copy = moment(startDate); // shallow copy

  const daysInMonth = copy.subtract(3, "M");
  console.info({
    startDate: startDate.format(),
    daysInMonth: daysInMonth.format()
  });
