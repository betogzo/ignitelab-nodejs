// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Replace<T, R> = Omit<T, keyof R> & R;
