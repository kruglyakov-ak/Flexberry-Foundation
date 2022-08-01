const convertTransfer = (stopsLength: number) => {
  switch (stopsLength) {
    case 0:
      return "Без пересадок";
    case 1:
      return "1 пересадка";
    default:
      return `${stopsLength} пересадки`;
  }
};

const humanizeDuration = (duration: number) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration - hours * 60;

  return `${hours}ч ${minutes}м`;
};

export { convertTransfer, humanizeDuration };
