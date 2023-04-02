import dayjs from 'dayjs'

export const calc_age = (birthday) => {
  const today = dayjs()
  const birthDate = dayjs(birthday)
  const baseAge = today.year() - birthDate.year()
  const thisBirthday = dayjs(`${today.year()}-${birthDate.month() + 1}-${birthDate.date()}`)
  return today.isBefore(thisBirthday) ? baseAge - 1 : baseAge
}

export const dateToIso8601 = (date) => {
  return dayjs(date, "YYYY/MM/DD").format("YYYY-MM-DD")
}