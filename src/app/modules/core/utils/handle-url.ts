import { enviroment } from "src/enviroments/enviroment";

export function getFullUrl(url: string): string {
  return `${enviroment.apiURL}/${url}`;
}