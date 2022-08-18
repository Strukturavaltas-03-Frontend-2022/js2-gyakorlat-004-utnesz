const getSecondsOfThisYearUntilNow = () => Math.round((new Date('August 31, 2022').getTime() - new Date(`January 01, 2022`).getTime()) / 1000);

export default getSecondsOfThisYearUntilNow
