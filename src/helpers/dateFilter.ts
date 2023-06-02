import { Item } from '../types/Item'

export function getCurrentMonth() {
  const now = new Date()
  return `${now.getFullYear()}-${now.getMonth() + 1}`
}

export function filterListByMonth(list: Item[], date: string): Item[] {
  const newList: Item[] = []
  const [year, month] = date.split('-')

  for (const i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[i])
    }
  }

  return newList
}

export function formatDate(date: Date): string {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
}
function addZeroToDate(n: number): string {
  return n < 10 ? `0${n}` : `${n}`
}

export function formatCurrentMonth(currentMonth: string): string {
  const [year, month] = currentMonth.split('-')
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]

  return `${months[parseInt(month) - 1]} de ${year}`
}

export function newDateAdjusted(dateField: string) {
  const [year, month, day] = dateField.split('-')
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
}
