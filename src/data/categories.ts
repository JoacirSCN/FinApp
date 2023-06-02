import { Category } from '../types/Category'

export const categories: Category = {
  rent: { title: 'Moradia', color: 'blue', expense: true },
  relex: { title: 'Entretenimento', color: 'blue', expense: true },
  transport: { title: 'Transporte', color: 'blue', expense: true },
  loans: { title: 'Empréstimo', color: 'blue', expense: true },
  safe: { title: 'Seguro', color: 'blue', expense: true },
  taxes: { title: 'Impostos', color: 'blue', expense: true },
  food: { title: 'Comida', color: 'brown', expense: true },
  savingsOrinvestments: {
    title: 'Poupanças ou investimentos',
    color: 'blue',
    expense: true,
  },
  pets: { title: 'Animais de estimação', color: 'blue', expense: true },
  giftsAndDonations: {
    title: 'Presentes e doações',
    color: 'blue',
    expense: true,
  },
  personalCares: { title: 'Cuidados pessoais', color: 'blue', expense: true },
  legalAdvice: { title: 'Assessoria jurídica', color: 'blue', expense: true },
  salary: { title: 'Salário', color: 'green', expense: false },
}
