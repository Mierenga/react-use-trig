import useTrig from 'react-use-trig';

export default function Example(): JSX.Element {
  const { trig } = useTrig();

  trig(setTimeout(() => console.log('pass a NodeJS.Timeout returned from setTimeout()'), 1000));

  trig([
    setTimeout(() => console.log('pass an array of NodeJS.Timeouts'), 2000),
    setTimeout(() => console.log('pass an array of NodeJS.Timeouts'), 3000),
  ]);

  trig({ t: 4000, f: () => console.log('pass TimeoutArgs with milliseconds t and function f')});
  trig([
    { t: 5000, f: () => console.log('pass an array of TimeoutArgs')},
    { t: 6000, f: () => console.log('pass an array of TimeoutArgs')},
  ]);

  return <></>;
}