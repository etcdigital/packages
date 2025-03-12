import type { z } from 'zod';

// @ts-expect-error
export type ZodSchema = z.ZodUnion | z.AnyZodObject | z.ZodArray<z.AnyZodObject>;

export const jsonContent = <T extends ZodSchema>(
  schema: T,
  description: string,
) => {
  return {
    content: { 'application/json': { schema } },
    description,
  };
};

export const formDataContent = <T extends ZodSchema>(
  schema: T,
  description: string,
) => {
  return {
    content: { 'multipart/form-data': { schema } },
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