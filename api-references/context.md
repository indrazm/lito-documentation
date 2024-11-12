---
outline: deep
---

# Context

Context is an argument that is passed to the handler function of a route. It is an object that contains information about the request object.

## Properties

- `params`: An object containing the route parameters.
- `query`: An object containing the query parameters.
- `body`: The request body.
- `headers`: The request headers.
- `url`: The request URL.
- `path`: The request path.
- `cookies`: The request cookies.
- `cookie`: A function to get a cookie by name.
- `status`: The response status code.

## Params

Params are the route parameters that are defined in the route path. For example, in the route path `/products/:productId`, `productId` is a route parameter.

Example

```ts
router.get("/products/:productId", (ctx) => {
  const productId = ctx.params.productId;
  return { message: `Product ID: ${productId}` };
});
```

## Query

Query parameters are the parameters that are passed in the URL query string. For example, in the URL `/products?category=electronics`, `category` is a query parameter.

Example

```ts
router.get("/products", (ctx) => {
  const category = ctx.query.category;
  return { message: `Category: ${category}` };
});
```

## Body

The request body is the data that is sent in the request. It is commonly used in POST, PUT, and PATCH requests.

Example

```ts
router.post("/products", (ctx) => {
  const product = ctx.body;
  return { message: `Product: ${product.name}` };
});
```

## Headers

Headers are the metadata that is sent in the request. They contain information such as the content type, user agent, and authorization.

Example

```ts
router.get("/products", (ctx) => {
  const contentType = ctx.headers["content-type"];
  return { message: `Content Type: ${contentType}` };
});
```

## URL

The request URL is the full URL of the request, including the protocol, host, port, path, and query string.

Example

```ts
router.get("/products", (ctx) => {
  const url = ctx.url;
  return { message: `URL: ${url}` };
});
```

## Path

The request path is the path part of the request URL, excluding the protocol, host, port, and query string.

Example

```ts
router.get("/products", (ctx) => {
  const path = ctx.path;
  return { message: `Path: ${path}` };
});
```

## Cookies

Cookies are small pieces of data that are stored in the browser. They are commonly used for session management and user tracking. Server can read cookies from the request by using `ctx.cookies`.

Example

```ts
router.get("/products", (ctx) => {
  const myCookie = ctx.cookies.myCookie;
  return { message: `My Cookie: ${myCookie}` };
});
```

## Cookie

The `cookie` function is used to get, set and delete a cookie by name from the request.

### Set a cookie

Example

```ts
router.get("/products", (ctx) => {
  ctx.cookie.set("name", "value");
  return { message: "Cookie set" };
});
```

### Get a cookie

```ts
router.get("/products", (ctx) => {
  const name = ctx.cookie.get("name");
  return { message: `Cookie value: ${name}` };
});
```

### Delete a cookie

```ts
router.get("/products", (ctx) => {
  ctx.cookie.delete("name");
  return { message: "Cookie deleted" };
});
```

### Cookie options

You can set additional options for the cookie such as `expires`, `max-age`, `domain`, `path`, `secure`, `httpOnly`, and `sameSite`.

Example

```ts
router.get("/products", (ctx) => {
  ctx.cookie.set("name", "value", { expires: 3600, secure: true });
  return { message: "Cookie set" };
});
```
