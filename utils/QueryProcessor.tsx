export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("andrew id")) {
    return "mmetwaly";
  }
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "mm";
  }

  if (query.toLowerCase().includes("age")) {
    return "67";
  }
  
  // Multiplication followed by addition
  const multiplyPlus = q.match(
    /what is (\d+) multiplied by (\d+) plus (\d+)/i
  );

  if (multiplyPlus) {
    const a = Number(multiplyPlus[1]);
    const b = Number(multiplyPlus[2]);
    const c = Number(multiplyPlus[3]);
    return String(a * b + c);
  }

  // Simple addition
  const addition = q.match(/what is (\d+) plus (\d+)/i);

  if (addition) {
    return String(Number(addition[1]) + Number(addition[2]));
  }

  // Find the largest number
  const largest = q.match(/largest:\s*([\d,\s]+)/i);

  if (largest) {
    const numbers = largest[1].match(/\d+/g) || [];
    if (numbers.length > 0) {
      return String(Math.max(...numbers.map(Number)));
    }
  }
   
const scrabble = query.match(/scrabble score of (\w+)/i);

if (scrabble) {
  const scores: Record<string, number> = {
    a: 1, b: 3, c: 3, d: 2, e: 1, f: 4,
    g: 2, h: 4, i: 1, j: 8, k: 5, l: 1,
    m: 3, n: 1, o: 1, p: 3, q: 10, r: 1,
    s: 1, t: 1, u: 1, v: 4, w: 4, x: 8,
    y: 4, z: 10
  };

  const word = scrabble[1].toLowerCase();
  const total = [...word].reduce(
    (sum, letter) => sum + scores[letter], 0
  );

  return String(total);
}

  return "";
}