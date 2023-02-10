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
    }
}