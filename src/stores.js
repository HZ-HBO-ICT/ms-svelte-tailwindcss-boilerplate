import { writable } from "svelte/store";
import { persisted } from "svelte-persisted-store";

export const userToken = writable("")
export const userEmail = persisted('userEmail', "");
export const userMatch = persisted("userMatch", "");
export const userData = persisted('userData', { "username": ""});