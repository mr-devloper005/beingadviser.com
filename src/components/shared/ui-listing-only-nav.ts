import { SITE_CONFIG, type TaskConfig, type TaskKey } from '@/lib/site-config'

const LISTING_UI_KEY: TaskKey = 'listing'

/** Public navigation surfaces: only the Listing task (when enabled in site config). */
export function getListingOnlyNavTasks(): TaskConfig[] {
  const task = SITE_CONFIG.tasks.find((t) => t.key === LISTING_UI_KEY && t.enabled)
  return task ? [task] : []
}

export function getListingTaskOrNull(): TaskConfig | null {
  const task = SITE_CONFIG.tasks.find((t) => t.key === LISTING_UI_KEY && t.enabled)
  return task ?? null
}
