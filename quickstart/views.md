# Views

Views is a way to display data to the user. In lito, we utilize `jsx` to ease the process of creating views. You can create a view by creating a file with `.tsx` extension.

## Basic View

```tsx
const Home = () => {
  return <div>Hello World</div>;
};
```

## Using Props

```tsx
interface Props {
  name: string;
}

const Home = (props: Props) => {
  return <div>Hello {props.name}</div>;
};
```

## Passing Props in Controller

You can pass props to the view by using the `view` function. The `view` function accepts two arguments, the first one is the view component and the second one is the props.

> [!INFO]
> Typescript would infer the type of the props based on the view component.

```tsx
import { Controller } from "litojs";
import { view } from "litojs/utils";

export class MyController extends Controller {
  async index() {
    return view(Home, { name: "John Doe" });
  }
}
```

## Redirecting

You can redirect to another route by using the `redirect` function. The `redirect` function accepts one argument, the route you want to redirect to.

```tsx
import { Controller } from "litojs";
import { redirect } from "litojs/utils";

export class MyController extends Controller {
  async index() {
    return redirect("/home");
  }
}
```
