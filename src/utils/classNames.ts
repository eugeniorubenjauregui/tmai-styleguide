/**
 * Utility function for conditional class names
 */

export type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | Record<string, boolean>
  | ClassValue[];

/**
 * Combines class names conditionally
 */
export function classNames(...classes: ClassValue[]): string {
  const result: string[] = [];

  for (const cls of classes) {
    if (!cls) continue;

    if (typeof cls === 'string') {
      result.push(cls);
    } else if (typeof cls === 'number') {
      result.push(String(cls));
    } else if (Array.isArray(cls)) {
      const inner = classNames(...cls);
      if (inner) result.push(inner);
    } else if (typeof cls === 'object') {
      for (const key in cls) {
        if (cls[key]) {
          result.push(key);
        }
      }
    }
  }

  return result.join(' ');
}

/**
 * Alias for classNames
 */
export const cn = classNames;

