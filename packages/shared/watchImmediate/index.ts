import type { WatchCallback, WatchOptions, WatchSource, WatchStopHandle } from 'vue-demi'
import { watch } from 'vue-demi'

import type { MapOldSources, MapSources } from '../utils/types'

// overloads
export function watchImmediate<T extends Readonly<WatchSource<unknown>[]>>(
  source: [...T],
  cb: WatchCallback<MapSources<T>, MapOldSources<T, true>>,
  options?: Omit<WatchOptions<true>, 'immediate'>
): WatchStopHandle

export function watchImmediate<T>(
  source: WatchSource<T>,
  cb: WatchCallback<T, T | undefined>,
  options?: Omit<WatchOptions<true>, 'immediate'>
): WatchStopHandle

export function watchImmediate<T extends object>(
  source: T,
  cb: WatchCallback<T, T | undefined>,
  options?: Omit<WatchOptions<true>, 'immediate'>
): WatchStopHandle

/**
 * Shorthand for watching value with {immediate: true}
 *
 * @see https://vueuse.org/watchImmediate
 */
export function watchImmediate<T = any>(
  source: T | WatchSource | Array<WatchSource>,
  cb: WatchCallback<any, any>,
  options?: Omit<WatchOptions, 'immediate'>,
): WatchStopHandle {
  return watch(
    source as any,
    cb,
    {
      ...options,
      immediate: true,
    },
  )
}
