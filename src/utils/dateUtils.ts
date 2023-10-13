const convertDate = (dateStr: string
) => {
    // Split date and create a new date object
    const [day, month, year] = dateStr.split('/');
    const dateObj = new Date(year as unknown as number, month as unknown as number - 1, day as unknown as number); // Month is 0-indexed

    // Month translation map
    const monthNames = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    // Return the formatted date
    return `${dateObj.getDate()} ${monthNames[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
}

export default convertDate;