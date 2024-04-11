export const combineStyles = (styles: Array<string | undefined | null>): string =>
  styles.filter((v) => v).join(' ');
