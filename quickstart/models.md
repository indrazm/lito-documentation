# Models

> [!WARNING]
> LitoORM is not currently available. This documentation is a work in progress. Feel free to use your preferred ORM such as Prisma, DrizzleORM, or any.

Model is a class that represents a table in the database. In Lito, you can define a model by creating the `Models` class from `litojs`.

```ts
import { Model } from "litojs";

const user = new Model("user", (col) => ({
  id: col.text().primaryKey().default("cuid2"),
  name: col.text().notNull(),
  email: col.text().notNull().unique(),
  password: col.text().notNull(),
}));
```
