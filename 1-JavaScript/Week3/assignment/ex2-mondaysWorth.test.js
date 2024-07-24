'use strict';
/*------------------------------------------------------------------------------
Full description atL https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week4#exercise-2-whats-your-monday-worth

- Complete the function names `computeEarnings`. It should take an array of
  tasks and an hourly rate as arguments and return a formatted Euro amount
  (e.g: `€11.34`) comprising the total earnings.
- Use the `map` array function to take out the duration time for each task.
- Multiply each duration by a hourly rate for billing and sum it all up.
- Make sure the program can be used on any array of objects that contain a
  `duration` property with a number value.
------------------------------------------------------------------------------*/
const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

const hourlyRate = 25;

function computeEarnings(tasks, hourlyRate) {
  if (typeof hourlyRate !== 'number') return;

  const tasksWithValidDuration = tasks.filter(
    ({ duration }) => duration && typeof duration === 'number'
  );

  const durationsInMinutes = tasksWithValidDuration.map(
    (task) => task.duration
  );

  const minuteRate = hourlyRate / 60;
  const bills = durationsInMinutes.map((duration) => duration * minuteRate);

  const earnings = bills.reduce((sum, bill) => sum + bill, 0);
  const earningsString = `€${earnings.toFixed(2)}`;

  return earningsString;
}

// I broke it down too much. I wonder whether it became easier or harder to follow.

// validDurations  durations.filter(x => x)

// Is 'x' ok here? a meaningful name seems redundant to me as the context is short & intuitive.
// I see it breaks the rule of naming but I think it is similar to using i or j within 'for'

// ! Unit tests (using Jest)
describe('computeEarnings', () => {
  test('should take two parameters', () => {
    // The `.length` property indicates the number of parameters expected by
    // the function.
    expect(computeEarnings).toHaveLength(2);
  });

  test('should compute the earnings as a formatted Euro amount', () => {
    const result = computeEarnings(mondayTasks, hourlyRate);
    const expected = '€187.50';
    expect(result).toBe(expected);
  });
});
