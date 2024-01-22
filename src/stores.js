import { writable } from "svelte/store";
import { persisted } from "svelte-persisted-store";
import { json } from "@sveltejs/kit";

export const userToken = writable("")
export const userEmail = persisted('userEmail', "");

export const userData = persisted('userData', {});