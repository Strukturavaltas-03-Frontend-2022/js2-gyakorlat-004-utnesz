
const countOfWorkingDays = (startDate = "January 1, 2022", endDate = "August 31, 2022") => {
    let count = 0;

    const stDateObj = new Date(startDate)
    const enDateObj = new Date(endDate)
    if (stDateObj > enDateObj) throw new Error('The first parameter is earlier date, than second!')
    while (stDateObj <= enDateObj) {
        const dayOfWeek = stDateObj.getDay()
        if (dayOfWeek !== 0 && dayOfWeek !== 6) count++
        stDateObj.setDate(stDateObj.getDate() + 1)
    }

    return count
}

export default countOfWorkingDays
