// Usei de inspiração pra utilização de um id o PR do joão santana e esse site:https://www.programiz.com/javascript/examples/generate-random-strings
export default function generateString() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = ' ';
  const charactersLength = characters.length;
  const keyLength = 5;
  for (let i = 0; i < keyLength; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
