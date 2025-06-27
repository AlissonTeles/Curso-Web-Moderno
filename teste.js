/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function (intervals) {
  let teste2 = [];
  let teste = new Map();
  let repeat = 0;
  intervals.sort((a, b) => a[1] - b[1]);

  for (const intervalo in intervals) {
    for (const inde in intervals) {
      if (intervals[intervalo] == intervals[inde]) {
        continue;
      }
      console.log(teste);

      if (teste[intervals[inde]]) {
        console.log(teste[intervals[inde]]);
        console.log(intervals[inde]);
        continue;
      }

      if (
        (intervals[intervalo][0] >= intervals[inde][0] ||
          intervals[intervalo][1] >= intervals[inde][1]) &&
        intervals[inde][1] >= intervals[intervalo][0]
      ) {
        teste[intervals[intervalo].toString()] = intervals[inde].toString();
        teste[intervals[inde].toString()] = intervals[inde].toString();

        repeat += 1;
        break;
      }
    }
  }

  console.log("ACABOUUUUUUUUUUUUUUUUUUUUU");

  console.log(repeat);
  return repeat == 0 ? 1 : repeat;
};

minGroups([
  [441459, 446342],
  [801308, 840640],
  [871890, 963447],
  [228525, 336985],
  [807945, 946787],
  [479815, 507766],
  [693292, 944029],
  [751962, 821744],
]);
