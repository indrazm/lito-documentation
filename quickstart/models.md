# Models

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

## Queries

### Select All

```ts
const users = await user.query.all();
```

### Select

```ts
const user = await user.query.select().where("id", "=", "1").first();
```

### Create

```ts
const user = await user.query.create({
  name: "John Doe",
  email: "john@doe.com",
  password: "password",
});
```

### Update

```ts
const user = await user.query.update({ name: "John Doe" }).where("id", "=", "1");
```

### Delete

```ts
const user = await user.query.delete().where("id", "=", "1");
```
