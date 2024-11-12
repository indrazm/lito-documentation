---
outline: deep
---

# Controller

> For separation of concerns, i do suggest to create a controller for each route. This will make your code more readable and maintainable.

Controllers are the heart of your application, as they determine how HTTP requests should be handled. In this guide, you'll learn how to create a new controller and define a simple route.

## Functional Controller

Create a new file named `controller.ts` inside the folder of the app. This file will contain the logic for handling incoming requests.

```ts
export async function myController() {
  return { message: "Hello, World!" };
}
```

And then, you can define the route in the `router.ts` file.

```ts
import { Router } from "litojs";
import { myController } from "./controller";

export const router = new Router();

router.get("/", myController);
```

## Class Controller

You can also define a controller as a class. This approach is useful when you need to manage or organize multiple routes within a single controller.

```ts
import { Controller } from "litojs";

export class MyController extends Controller {
  async index() {
    return { message: "Hello, World!" };
  }

  async show() {
    return { message: "Show page" };
  }

  async create() {
    return { message: "Create page" };
  }
}
```

And then, you can define the route in the `router.ts` file.

```ts
import { Router } from "litojs";
import { MyController } from "./controller";

export const router = new Router();

router
  .controller(MyController)
  // Mapping routes to controller methods
  .get("/", "index")
  .get("/show", "show")
  .post("/create", "create");
```

## Context

In the controller function, you can access the request objects through the `context` parameter. This allows you to interact with the incoming request.

```ts
import { Context } from "litojs";

export async function myController(context: Context) {
  const { params } = context;
  return { params, query, body };
}
```

```ts
import { Context } from "litojs";

export class MyController extends Controller {
  async index(context: Context) {
    const { params } = context;
    return { params, query, body };
  }
}
```
