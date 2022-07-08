export default function healthGradation(arr) {
  arr.sort((a, b) => b.health - a.health);
  return arr;
}