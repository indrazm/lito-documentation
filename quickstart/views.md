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

```tsx
import { Controller } from "litojs";
import { view } from "litojs/renderer";

export class MyController extends Controller {
  async index() {
    return view(Home, { name: "John Doe" });
  }
}
```
