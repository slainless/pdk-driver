# Prodeskel Driver in Node.JS

## Quick Start

Before starting, generate `dev/connection_dump.json` and `dev/credential.json`
(or, just modify `dev/index.ts` which will need those two files to be present).
Both files definition can be checked in `src/connection.ts`.

`dev/connection_dump.json`:

```json
{
  "cookies": "",
  "isLoggedIn": false
}
```

`dev/credential.json`:

```json
{
  "username": "myusername",
  "password": "secretKey"
}
```

Then, import `Driver` from `src/index.ts`. Initialize `Driver` with credential
then call it's method. Login can also (and should) be enforced before attempting
to call any other method to make sure initial request and resource is not wasted
because of bad session.

---

## API Documentation

To be added.

---

This project is using [rehype](https://github.com/rehypejs/rehype) of [unified](https://github.com/unifiedjs/unified) system to parse HTML into `unist` or unified syntax tree then traverse it to collect data from prodeskel.

---

## References

- Tree traversing in unified:
  [[1]](https://unifiedjs.com/learn/recipe/tree-traversal/)
  [[2]](https://unifiedjs.com/learn/recipe/tree-traversal-typescript/)
- CSS Selector-like traversing: [[1]](https://unifiedjs.com/explore/package/unist-util-select/)
