 # 🧹 react-use-trig

> A React Hook that manages and cleans up after calls to `setTimeout()`

It triggers functions and keeps them from leaking all over the floor.
When using `trig()`, every time a component is cleaned up by React, it's pending Timeouts are cleared.

## Usage

Learn how to use it in 6 seconds:
```ts
import useTrig from 'react-use-trig';

function Example(): JSX.Element {
  const { trig } = useTrig();

  trig(setTimeout(() => console.log('pass a NodeJS.Timeout returned from setTimeout()'), 1000));

  trig([
    setTimeout(() => console.log('pass an array of NodeJS.Timeouts'), 2000),
    setTimeout(() => console.log('pass an array of NodeJS.Timeouts'), 3000),
  ]);

  trig({ t: 4000, f: () => console.log('pass TimeoutArgs with milliseconds t and function f') });
  
  trig([
    { t: 5000, f: () => console.log('pass an array of TimeoutArgs') },
    { t: 6000, f: () => console.log('pass an array of TimeoutArgs') },
  ]);

  return <></>;
}
```

> [trig](https://en.wiktionary.org/wiki/trig) : __adjective__ (comparative trigger, superlative triggest)
> -  True; trusty; trustworthy; faithful.
> - Safe; secure.
> - Tight; firm; steady; sound; in good condition or health.
> - Neat; tidy; trim; spruce; smart.
