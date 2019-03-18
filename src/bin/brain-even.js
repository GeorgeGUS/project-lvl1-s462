#!/usr/bin/env node

import { greeting, getUsername, guessEven } from '..';

greeting();
console.log('Answer "yes" if number even otherwise answer "no".');
const username = getUsername();
guessEven(username);
