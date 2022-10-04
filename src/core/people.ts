import * as React from "react";
import { faker } from "@faker-js/faker";

let p: Promise<void>;
let data: Person[];

export function usePeople() {
  if (!p) {
    p = new Promise((resolve) => {
      setTimeout(() => {
        data = Array.from({ length: 100 }, (_, i) => ({
          id: i + 1,
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          avatar: faker.internet.avatar(),
        }));
        resolve();
      }, 1000);
    });
  }

  if (!data) throw p;

  return data;
}

export type Person = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
};
