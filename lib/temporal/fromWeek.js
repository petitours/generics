import addDays from '@lcf.vs/generics/lib/temporal/addDays.js'
import firstDayOfJanuary from '@lcf.vs/generics/lib/temporal/firstDayOfJanuary.js'

export default function fromWeek ([year, week]) {
  const base = addDays(firstDayOfJanuary(year), (week - 1) * 7)
  const day = base.getDay()

  return day <= 4
    ? addDays(base, - day + 1)
    : addDays(base, 8 - day)
}
