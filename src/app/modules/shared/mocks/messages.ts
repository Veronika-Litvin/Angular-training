interface IMessagesKeys {
    [key: string]: string;
  }

export const messages: IMessagesKeys = {
    required: 'Required field',
    maxlength: ':field: must be at most :n: characters length.',
    minlength: ':field: must be at least :n: characters length.',
    max: ':field: must be at most :n:.',
    min: ':field: must be at least :n:.',
    email: 'Please enter a valid email address',
    pattern: 'It should be `@gmail.com` domain',
    emailExists: 'The email is already registered'
};