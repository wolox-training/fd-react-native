export const minLength = value => (value && value.length < 8 ? ` Must be 8 characters or more` : undefined);

export const required = value => (value ? undefined : 'Required');
