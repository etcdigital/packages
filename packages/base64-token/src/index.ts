export const translateFromB64Token = (token: string): string => {
  const firstTranslate = Buffer.from(token, 'base64').toString('utf8');
  const secondTranslate = Buffer.from(firstTranslate, 'base64').toString(
    'utf8',
  );
  return secondTranslate;
};

export const generateB64Token = (value: string): string => {
  const firstTransform = Buffer.from(value).toString('base64');
  const secondTransform = Buffer.from(firstTransform).toString('base64');
  return secondTransform;
};
