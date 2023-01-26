export function randomDelay(id: string, bottom: number, top: number): number {
    const delay = Math.floor(Math.random() * (1 + top - bottom)) + bottom;
    console.log(`Delay for ${id} user = ${delay}`);
    return delay;
  }