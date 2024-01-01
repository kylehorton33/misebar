import { writable } from "svelte/store";

export const ingredients = writable<Ingredient[]>()
export const recipes = writable<Recipe[]>()

// TODO: add localStorage for stock list