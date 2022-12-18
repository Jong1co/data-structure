function solution(s) {
  let answer = [0, 0];
  let binary = s.split("");

  while (binary.length > 1) {
    let notZero = binary.filter((num) => num != 0).length;
    answer[1] += binary.length - notZero;
    binary = notZero.toString(2).split("");
    answer[0]++;
  }

  return answer;
}
