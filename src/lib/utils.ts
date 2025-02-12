import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { dummyUsers } from "./data";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function autheticateUser(username: string, password: string) {
  const index = dummyUsers.findIndex(
    (user) => user.username === username && user.password === password
  );
  if (index === -1) return null;
  return {
    username: dummyUsers[index].username,
    role: dummyUsers[index].role,
  };
}

export const API = axios.create({
  baseURL: "http://localhost:3000",
});

export function delay(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
