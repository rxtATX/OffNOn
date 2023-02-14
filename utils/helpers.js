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
    renderNewMessage: (msg) => {
        const userID = req.session.user_id;
        // Should make selecting the user more
        if(userID === 3) {
            return ( // This should be the styling for the technician
                `<div class="card mt-3 mb-3">
                <div class="card-header" style="background-color:silver">
                    <div class="float-end" style="font-size:larger">
                        <h5 class="card-title">Created by: {{user.first_name}} {{user.last_name}}</h5>
                    </div>
                </div>
                <div class="card-body">
                    <p class="card-text float-end">{{ticket_text}}</p>
                </div>
            </div>
            <p>{{{dateFormat "h, m, A" timeStamp}}}</p>`
            )
        } else {
            return ( // This should be the styling for the user
                `<div class="card mt-3 mb-3">
                <div class="card-header" style="background-color:#007EFF">
                    <div class="float-start" style="font-size:larger">
                        <h5 class="card-title">Created by: {{user.first_name}} {{user.last_name}}</h5>
                    </div>
                </div>
                <div class="card-body">
                    <p class="card-text">{{ticket_text}}</p>
                </div>
            </div>
            <p class="mb-3">{{{dateFormat "h, m, A" timeStamp}}}</p>`
            )
            
        }
    }
    
    
    
    

}