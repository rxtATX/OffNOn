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
      },

      // checks to see if the status of the ticket is open
      isOpen: (status) => {
        if (status === 'Open') {
            return true;
          }
        
      },

      format_timestamp: (date) => {
        let p = new Intl.DateTimeFormat('en',{
            year:'numeric',
            month:'2-digit',
            day:'2-digit',
            hour:'2-digit',
            minute:'2-digit',
            hour12: true
          }).formatToParts(date).reduce((acc, part) => {
              acc[part.type] = part.value;
              return acc;
          }, {});
          
          return `${p.month}/${p.day}/${p.year}, ${p.hour}:${p.minute} ${p.dayPeriod}`; 
        },

    renderUrgencyOptions: (urgency) => {
        switch (urgency) {
            case 'Medium':
                return (
                `<select class="form-select" id="urgencySelect">
                    <option value="urgencyLow">Low</option>
                    <option selected value="urgencyMedium">Medium</option>
                    <option value="urgencyHigh">High</option>
                </select>`
                )
            
            case 'High':
                return (
                `<select class="form-select" id="urgencySelect">
                    <option value="urgencyLow">Low</option>
                    <option value="urgencyMedium">Medium</option>
                    <option selected value="urgencyHigh">High</option>
                </select>`
                )

            default:
                return (
                `<select class="form-select" id="urgencySelect">
                    <option value="urgencyLow">Low</option>
                    <option value="urgencyMedium">Medium</option>
                    <option value="urgencyHigh">High</option>
                </select>`
                )
            
        }
    },

    renderStatus: (status) => {
        switch (status) {
            case 'Claimed':
                return (
                `<select class="form-select" id="statusSelect">
                    <option value="statusUnclaimed">Unclaimed</option>
                    <option selected value="statusClaimed">Claimed</option>
                    <option value="statusPending">Pending</option>
                    <option value="statusResolved">Resolved</option>
                </select>
                `
                )
            
            case 'Pending':
                return (
                `<select class="form-select" id="statusSelect">
                    <option value="statusUnclaimed">Unclaimed</option>
                    <option value="statusClaimed">Claimed</option>
                    <option selected value="statusPending">Pending</option>
                    <option value="statusResolved">Resolved</option>
                </select>
                `
                )

            case 'Resolved':
                return (
                `<select class="form-select" id="statusSelect">
                    <option value="statusUnclaimed">Unclaimed</option>
                    <option value="statusClaimed">Claimed</option>
                    <option value="statusPending">Pending</option>
                    <option selected value="statusResolved">Resolved</option>
                </select>
                `
                
                )
            
            default:
                return (
                `<select class="form-select" id="statusSelect">
                    <option value="statusUnclaimed">Unclaimed</option>
                    <option value="statusClaimed">Claimed</option>
                    <option value="statusPending">Pending</option>
                    <option value="statusResolved">Resolved</option>
                </select>
                `
                )
        }
    }

      
}