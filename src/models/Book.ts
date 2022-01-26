import { createSchema, Type, typedModel } from 'ts-mongoose';

const BookSchema = createSchema(
  {
    title: Type.string({ required: true }),
    publisher: Type.string({ required: true }),
    image: Type.string(),
    authors: Type.array().of(Type.string()),
  },
  { timestamps: true },
);

export default typedModel('Book', BookSchema);
