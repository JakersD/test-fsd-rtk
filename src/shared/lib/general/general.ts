export const combineStyles = (styles: Array<string | undefined | null>): string =>
  styles.filter((v) => v).join(' ');

export const getIdFromPathname = (pathname: string): string => pathname[pathname.length - 1];
