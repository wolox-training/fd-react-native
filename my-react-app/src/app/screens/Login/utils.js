const minLength = value => (value && value.length < 8 ? ` Must be 8 characters or more` : undefined);

const required = value => (value ? undefined : 'Required');

export const userValidation = required;

export const passwordValidation = [required, minLength];
