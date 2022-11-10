- duration

-const date = new Date(
    "Tue Aug 09 2022 15:31:24 GMT+0500 (Pakistan Standard Time"
  );

- const diff = ~~Math.abs(
  moment.duration(moment(date).diff(moment())).asMonths()
);
- console.info({ diff }); // dif: 3
