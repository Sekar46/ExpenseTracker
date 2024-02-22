const formatCurrency = (cur: number) =>
  new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
    compactDisplay: 'long',
    maximumFractionDigits: 0
  }).format(cur)

export default formatCurrency
