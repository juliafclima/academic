export const formatarData = (date: Date) => {
  const dia = date.getDate().toString().padStart(2, '0');
  const mes = (date.getMonth() + 1).toString().padStart(2, '0');
  const ano = date.getFullYear().toString().slice(-2);
  return `${dia}/${mes}/${ano}`;
};
