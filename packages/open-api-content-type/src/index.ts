import type { z } from 'zod';

// @ts-expect-error
export type ZodSchema = z.ZodUnion | z.AnyZodObject | z.ZodArray<z.AnyZodObject>;

export const applicationJson = 'application/json'

export const multipartFormData = 'multipart/form-data'

export const jsonContent = <T extends ZodSchema>(
  schema: T,
  description: string,
) => {
  return {
    content: { [applicationJson]: { schema } },
    description,
  };
};

export const formDataContent = <T extends ZodSchema>(
  schema: T,
  description: string,
) => {
  return {
    content: { [multipartFormData]: { schema } },
    description,
  };
};

export const jsonContentRequired = <T extends ZodSchema>(
  schema: T,
  description: string,
) => {
  return {
    ...jsonContent(schema, description),
    required: true,
  };
};