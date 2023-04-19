import dayjs from 'dayjs'

// 経過した年数を計算(YYYY/MM/DDを引数に取り、そこから現在まで経過した年数(整数)を返す
export const calc_elapsed_year = (date) => {
  const today = dayjs()
  const birthDate = dayjs(date)
  const baseAge = today.year() - birthDate.year()
  const thisBirthday = dayjs(`${today.year()}-${birthDate.month() + 1}-${birthDate.date()}`)
  return today.isBefore(thisBirthday) ? baseAge - 1 : baseAge
}

export const dateToIso8601 = (date) => {
  return dayjs(date, "YYYY/MM/DD").format("YYYY-MM-DD")
}