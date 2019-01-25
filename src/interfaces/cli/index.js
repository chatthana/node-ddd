#!/usr/bin/env babel-node
'use strict';

import com from 'commander';
import inquirer from 'inquirer';
import { compose } from 'ramda';
import container from '../../../container';
import AppLayer from '../../../app/users';
import userRepository from '../../../infrastructure/repositories/users';

import { generate } from 'randomstring';
import crypto from 'crypto';

const { get, create } = AppLayer;

// Resolve the database
const { database } = container.cradle;
// Extract the model from the database object
const userModel = database.models.User;
// Compose the repository and the model to get all use cases
const useCases = compose(userRepository)(userModel);

// Separate the use cases into isolated module
const getUseCase = get({ userRepository: useCases });
const postUseCase = create({ userRepository: useCases });

com
.command('create')
.action(() => {
  inquirer.prompt([
    { type: 'input', name: 'firstname', message: 'Firstname of the user' },
    { type: 'input', name: 'lastname', message: 'Lastname of the user' },
    { type: 'input', name: 'email', message: 'The email of the user' },
    { type: 'input', name: 'age', message: 'Age of the user' },
  ]).then(answers => {
    const { firstname, lastname, age, email } = answers;
    const numericAge = parseInt(age);
    return postUseCase.create({body: {
      firstname,
      lastname,
      email,
      age: numericAge
    }});
  }).then(response => {
    console.log(response);
    process.exit();
  });
})

com.parse(process.argv);