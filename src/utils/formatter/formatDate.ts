const formatDate = (date: string | Date, timeStyle?: Intl.DateTimeFormatOptions['timeStyle']) =>
  new Intl.DateTimeFormat(
    'en-US',
    timeStyle ? { dateStyle: 'long', timeStyle } : { dateStyle: 'long' }
  ).format(typeof date === 'string' ? new Date(date) : date)

export default formatDate
