'use strict';

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

function computeEarnings(tasks, rate) {
  const durationInMinutes = tasks
    .map((task) => task.duration)
    .reduce((a, b) => a + b, 0);
  const durationInHours = durationInMinutes / 60;
  const totalEarnings = durationInHours * rate;
  const formattedTotalEarnings = totalEarnings.toFixed(2);
  return `€${formattedTotalEarnings}`;
}

// ! Unit tests (using Jest)
describe('computeEarnings', () => {
  test('should take two parameters', () => {
    expect(computeEarnings).toHaveLength(2);
  });

  test('should compute the earnings as a formatted Euro amount', () => {
    const result = computeEarnings(mondayTasks, hourlyRate);
    const expected = '€187.50';
    expect(result).toBe(expected);
  });
});
