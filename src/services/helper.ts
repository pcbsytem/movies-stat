export const formatDate = (date: string) => {
  if (!date) return Intl.DateTimeFormat("pt-BR").format(new Date());
  return new Intl.DateTimeFormat("pt-BR").format(new Date(date));
}