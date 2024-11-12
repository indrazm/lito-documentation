---
outline: deep
---

# Router

Router is a function to define your route path. You can define new router inside your app folder inside `apps` and create `router.ts` (This is convention).

```ts
import { Router } from "litojs";

export const router = new Router();
```

Router would be have 5 methods,

```ts
router.get(path, handler);
router.post(path, handler);
router.put(path, handler);
router.patch(path, handler);
router.delete(path, handler);
```

## Static route

To create static route you just need to do following :

```ts
import { Router } from "litojs";

export const router = Router();

router.get("/", () => {
  return { message: "Homepage" };
});

router.get("/about", () => {
  return { message: "Aboutpage" };
});
```

## Dynamic route

To create dynamic route you just need to do following :

```ts
import { Router } from "litojs";

export const router = Router();

router.get("/products/:productId", () => {
  return { message: "Dynamic single product" };
});

router.get("/orders/:orderId", () => {
  return { message: "Dynamic single order" };
});
```
