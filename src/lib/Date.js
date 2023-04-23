import dayjs from 'dayjs'

// 経過した年数を計算。引数でもらった時刻から現在まで経過した年数(整数)を返す (引数の例 '1999-04-16T00:00:00.000Z')
export const diff_year = (date) => {
  const thisYear = dayjs().year()
  const year = dayjs(date).year()
  const yearsDiff = thisYear - year

  return yearsDiff.toString()
}

// APIからの返り値をYYYY年MM月DD日のフォーマットで返す
export const dateToIsoJPStyle = (dateString) => {
  const date = dayjs(dateString);
  const formattedDate = date.format('YYYY年MM月DD日');
  return formattedDate;
}

export const dateToIso8601 = (date) => {
  return dayjs(date, "YYYY/MM/DD").format("YYYY-MM-DD")
}