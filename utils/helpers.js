module.exports = {
    // Empty object  
    renderUrgencyChip: (urgency) => {
        switch (urgency) {
            case 'low':
                return `<h1><span class="badge rounded-pill bg-secondary">Low</span></h1>`

            case 'medium':
                return `<h1><span class="badge rounded-pill bg-warning text-dark">Medium</span></h1>`

            case 'high':
                return `<h1><span class="badge rounded-pill bg-danger">High</span></h1>`

            default:
                break;
        }
    },

    format_date: (date) => {
        // Using JavaScript Date methods, we get and format the month, date, and year
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
          // We add five years to the 'year' value to calculate the end date
          new Date(date).getFullYear()
        }`;
      }
}