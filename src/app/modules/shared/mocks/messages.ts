interface IMessagesKeys {
  [key: string]: string;
}

export const messages: IMessagesKeys = {
  required: ':field: is required. ',
  maxlength: ':field: must be at most :n: characters length.',
  minlength: ':field: must be at least :n: characters length.',
  max: ':field: must be at most :n:.',
  min: ':field: must be at least :n:.',
  email: 'Please enter a valid email address. ',
  gmailFormat: 'It should be `@gmail.com` domain. ',
  emailExists: 'The email is already registered. ',
  customRequired: 'If a city is selected, then the zip code is required.'
};