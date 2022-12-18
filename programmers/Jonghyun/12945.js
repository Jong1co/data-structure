function solution(n) {
  let answer = 0;

  const fibonacciNumbers = (prev, curr, count) => {
    if (count === n) return (answer = (prev + curr) % 1234567);
    fibonacciNumbers(curr % 1234567, (prev + curr) % 1234567, count + 1);
  };

  fibonacciNumbers(0, 1, 2);
  return answer;
}

function solution2(n) {
  let fibonacci = [0, 1];
  let [prev, curr] = fibonacci;
  for (let i = 0; i < n - 1; i++) {
    let now = (prev + curr) % 1234567;
    prev = curr % 1234567;
    curr = now;
  }
  return curr;
}
