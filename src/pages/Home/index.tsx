import { useState, useEffect } from 'react'
import { items } from '../../data/items'
import * as C from './styles'
import { Item } from '../../types/Item'
import { filterListByMonth, getCurrentMonth } from '../../helpers/dateFilter'
import { TableArea } from '../../components/TableArea'
import { InfoArea } from '../../components/InfoArea'

export function Home() {
  const [list, setList] = useState<Item[]>(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  function handleMonthChange(newMonth: string) {
    setCurrentMonth(newMonth)
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  )
}
