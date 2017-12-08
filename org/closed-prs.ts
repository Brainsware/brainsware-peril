import { schedule, danger, warn, fail } from "danger"

declare const peril: any // danger/danger#351

// Either schedules the promise for execution via Danger, or invokes closure.
const runRFC = (reason: string, closure: () => void | Promise<any>) =>
  closure instanceof Promise ? schedule(closure) : closure()

const rfc: any = runRFC
