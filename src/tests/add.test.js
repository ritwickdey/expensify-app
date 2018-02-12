const add = (a, b) => a + b;

const generateGreeting = (name = 'User') => `Hello, ${name}`;

test('should add two numbers', () => {
  const result = add(1, 5);
  expect(result).toBe(6);
});

test('should return with name', () => {
  const result = generateGreeting('Ritwick');
  expect(result).toContain('Ritwick');
});

test('should return with `user`', () => {
  const result = generateGreeting();
  expect(result).toContain('User');
});
