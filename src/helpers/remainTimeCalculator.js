export const remainTimeCalculator = (currentDate, dueDate) => {
  const dateNow = new Date(currentDate);
  const dateDue = new Date(dueDate);
  var seconds = Math.floor((dateDue - dateNow) / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  hours = hours - days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;
  seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

  return `${hours} horas, ${minutes} minutos`;
};
