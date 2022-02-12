export type WithTarget<E extends Event, Target> = E & { currentTarget: Target };
