---
outline: deep
---

# Router

Router is a function to define your route path.

### Static Router

To create a router, you can create `router.ts` inside your app folder.

```ts
import { Router } from "litojs";

export const router = new Router();

router.get("/", () => {
  return { message: "Homepage" };
});
```

### Dynamic Router

To create dynamic route you just need to do following :

```ts
import { Router } from "litojs";

export const router = new Router();

router.get("/products/:productId", () => {
  return { message: "Dynamic single product" };
});
```

### Context

The handler function will receive a context object as the only argument. The context object contains the request object.

```ts
router.get("/", (context) => {
  return { message: "Homepage" };
});
```

The context object has the following properties:

- `params`: An object containing the route parameters.
- `query`: An object containing the query parameters.
- `body`: The request body.
- `headers`: The request headers.
- `url`: The request URL.
- `path`: The request path.
- `cookies`: The request cookies.
- `cookie`: A function to get a cookie by name.
- `status`: The response status code.

### Response

The response can be anything, it can be a string or an object.

```ts
router.get("/", () => {
  return { message: "Homepage" };
});

router.get("/fruits", () => {
  return ["apple", "banana", "orange"];
});

router.get("/about", () => {
  return "Aboutpage";
});
```
