---
outline: deep
---

# Getting Started

To create project with lito, you can create by this command. It will create the boilerplate for you. Everything would be setuped and you are good to go!

```bash
bunx create lito
```

In project folder there is `apps` folder where you can see all the `app`. We do refer this `app` term to be a services where you can define your app.

### Basic App

In the `apps/main.ts` you would see this App defined.

```ts
import { App } from "litojs";

export const app = App({
  apps: ["core"],
});
```

Inside an `App(config)` you can register any app inside `apps` folder to Lito. Where all router, controller and models would be read by Lito.
