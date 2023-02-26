export function isObject(object: any) {
  return object != null && object.constructor.name === "Object";
}

export function isNullish(object: any) {
  return object === null || object === undefined;
}

export type PlainObject<T = unknown> = {
  [k in string | symbol]: T;
};

export default function isObjects<T = unknown>(
  value: unknown
): value is PlainObject<T> {
  return (
    typeof value === "object" &&
    value !== null &&
    value.constructor === Object &&
    Object.prototype.toString.call(value) === "[object Object]"
  );
}
