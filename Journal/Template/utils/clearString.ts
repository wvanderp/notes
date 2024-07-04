/**
 * cleans the string from '&#x27;'
 * @param input the string to clean
 * @returns the cleaned string
 */
export default function cleanString(input: string): string {
    return input.replace(/&#(\d+);|&#x([0-9A-Fa-f]+);|&(\w+);/g, (match, dec, hex, named) => {
      if (dec) {
          return String.fromCharCode(parseInt(dec, 10));
      } else if (hex) {
          return String.fromCharCode(parseInt(hex, 16));
      } else if (named) {
          const entities = {
              amp: '&',
              lt: '<',
              gt: '>',
              quot: '"',
              apos: '\'',
              // Add more named entities as needed
          };
          // @ts-expect-error
          return entities[named] || match;
      }
      return match;
  });
  }
