/**
 * @description Halts the application for a given amount of time.
 * @param timeout The amount of time you want to wait in milliseconds
 * @returns A blank promise that resolves after the timeout has passed
 */

export const sleep = async (timeout: number): Promise<void> =>
  new Promise<void>((resolve) =>
    setTimeout(() => {
      resolve()
    }, timeout)
  )
