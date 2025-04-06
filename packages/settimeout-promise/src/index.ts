/**
 * Apenas mais uma promesa para esperar o tempo passar
 * @param ms number
 * @returns void
 */

export const awaitMs = (ms: any) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({});
    }, ms);
  });
