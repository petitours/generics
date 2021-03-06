import pad from '@lcf.vs/generics/lib/utils/number/pad.js'
import clone from '@lcf.vs/generics/lib/temporal/clone.js'

export default function toMonthString (date) {
  return pad(clone(date).getMonth() + 1)
}
