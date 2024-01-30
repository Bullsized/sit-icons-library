/**
 * A helper function that takes an icon name (`organigram-chart-1`, `tag-disabled`, `forklift`, etc)
 * and returns it without dashes and capitalizes the first letter (`Organigram chart 1`, `Tag disabled`,
 * `Forklift`, etc).
 *
 * @param iconName - string.
 */
export function transformIconName(iconName: string): string {
  if (!iconName) return '';

  // first remove all the dash (`-`) instances:
  const stringWithoutDash = iconName.replace(/-/g, ' ');

  // then return just the first letter capitalized:
  return stringWithoutDash.charAt(0).toUpperCase() + stringWithoutDash.slice(1);
}

/**
 * A helper function that takes an array as a parameter, checks if the array is not empty,
 * then generates and returns a random index using Math.random().
 *
 * @param array - T[]
 */
export function getRandomIndex<T>(array: T[]): number | undefined {
  if (array.length === 0) return undefined;

  return Math.floor(Math.random() * array.length);
}
