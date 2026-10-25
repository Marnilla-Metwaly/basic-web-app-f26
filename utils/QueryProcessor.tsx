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
  const largest = query.match(/largest:\s*([\d,\s]+)/i);
  if (largest) {
  const numbers = largest[1].match(/\d+/g) || [];
  if (numbers.length > 0) {
    return String(Math.max(...numbers.map(Number)));
  }



  return "";
}
