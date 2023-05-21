export function enumFromStringValue<T>(
  enumObject: { [s: string]: T },
  value: string
): T | undefined {
  return (Object.values(enumObject) as unknown as string[]).includes(value)
    ? (value as unknown as T)
    : undefined;
}
