export type DevMessage = (check: boolean, message: string) => void;

const HEY_LISTEN = 'Hey, listen! ';
let warning: DevMessage = () => {};
let invariant: DevMessage = () => {};

if (process.env.NODE_ENV !== 'production') {
  warning = (check, message) => {
    if (!check && typeof console !== 'undefined') {
      console.warn(HEY_LISTEN + message);
    }
  };

  invariant = (check, message) => {
    if (!check) {
      throw new Error(HEY_LISTEN.toUpperCase() + message);
    }
  };
}

export { warning, invariant };
