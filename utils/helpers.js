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
                    <option value="Low">Low</option>
                    <option selected value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>`
                )
            
            case 'High':
                return (
                `<select class="form-select" id="urgencySelect">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option selected value="High">High</option>
                </select>`
                )

            default:
                return (
                `<select class="form-select" id="urgencySelect">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>`
                )
            
        }
    },

    renderStatus: (status) => {
        switch (status) {
            case 'Claimed':
                return (
                `<select class="form-select" id="statusSelect">
                    <option value="Unclaimed">Unclaimed</option>
                    <option selected value="Claimed">Claimed</option>
                    <option value="Pending">Pending</option>
                    <option value="Resolved">Resolved</option>
                </select>
                `
                )
            
            case 'Pending':
                return (
                `<select class="form-select" id="statusSelect">
                    <option value="Unclaimed">Unclaimed</option>
                    <option value="Claimed">Claimed</option>
                    <option selected value="Pending">Pending</option>
                    <option value="Resolved">Resolved</option>
                </select>
                `
                )

            case 'Resolved':
                return (
                `<select class="form-select" id="statusSelect">
                    <option value="Unclaimed">Unclaimed</option>
                    <option value="Claimed">Claimed</option>
                    <option value="Pending">Pending</option>
                    <option selected value="Resolved">Resolved</option>
                </select>
                `
                
                )
            
            default:
                return (
                `<select class="form-select" id="statusSelect">
                    <option value="Unclaimed">Unclaimed</option>
                    <option value="Claimed">Claimed</option>
                    <option value="Pending">Pending</option>
                    <option value="Resolved">Resolved</option>
                </select>
                `
                )
        }
    },
    
    
    // helper function to renderNewMessage for ticket chat
    renderNewMessage: (msg, currentUser, ticket) => {
        const client = ticket.client;
        const tech = ticket.tech;

        console.log(msg, currentUser)
        if(msg.user_id === currentUser) {
            return ( // This should be the styling for the technician
            `<li class="clearfix">
            <div class="message-data align-right">
            <span class="message-data-name"><b>You</b></span> <i class="fa fa-circle me"></i>
            </div>
            <div class="message me-message float-right">${msg.log_text}
            <div class='fa-solid float-right ${msg.is_hidden ? 'fa-eye-slash' : 'fa-eye'}'></div>
            </div>
        <p class="mb-3 float-right">${msg.date_created}</p>
        </li>`
            )
        } else {
            return ( // This should be the styling for the user
            `<li>
            <div class="message-data">
            <span class="message-data-name"><i class="fa fa-circle you"></i> <b>${currentUser === client.id ? client.first_name : tech.first_name}</b></span>
            </div>
            <div class="message you-message">
            ${msg.log_text}
            <div class='fa-solid float-right ${msg.is_hidden ? 'fa-eye-slash' : 'fa-eye'}'></div>
            </div>
        <p class="mb-3">${msg.date_created}</p>
        </li>`
            )
            
        }
    }
    
    
    
    

}