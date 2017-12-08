import { schedule, danger, warn, fail } from "danger"

// Either schedules the promise for execution via Peril, or invokes closure.
const runRFC = (reason: string, closure: () => void | Promise<any>) =>
  closure instanceof Promise ? schedule(closure) : closure()

const rfc: any = runRFC

export const rfc5 = rfc("No PR is too small to warrant a paragraph or two of summary", () => {
  const pr = danger.github.pr
  if (pr.body.length === 0) {
    fail("Please add a description to your PR.")
  }
})
