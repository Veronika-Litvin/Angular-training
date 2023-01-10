import { FavoriteTypes } from "./favorite.enum";

export type FavoriteStore = { [key in FavoriteTypes]: number[] };