export function enumFromStringValue<T>(
  enumObj: { [s: string]: T },
  value: string
): T | undefined {
  return (Object.values(enumObj) as unknown as string[]).includes(value)
    ? (value as unknown as T)
    : undefined;
}
