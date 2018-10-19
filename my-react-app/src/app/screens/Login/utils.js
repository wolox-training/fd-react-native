const minLength = value => (value && value.length < 8 ? 'Must be 8 characters or more' : undefined);

const required = value => (value ? undefined : 'Required');

const pattern = value =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  )
    ? undefined
    : 'Must have a valid pattern';

export const userValidation = [required, pattern];

export const passwordValidation = [required, minLength];
