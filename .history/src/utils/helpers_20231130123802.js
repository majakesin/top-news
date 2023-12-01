
export const displayDate = (inputDate) => {

    const dateObj = new Date(inputDate);

    // Extract components
    const day = dateObj.getUTCDate();
    const month = dateObj.getUTCMonth() + 1; // Months are zero-based
    const year = dateObj.getUTCFullYear();
  
    // Create formatted date string with zero-padding for day and month
    const formattedDate = `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`;
  
    return formattedDate;

};