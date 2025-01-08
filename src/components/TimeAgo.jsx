import {formatDistanceToNow, parseISO} from 'date-fns'

function TimeAgo({timestamp}) {
    let timeAgo = '';

    if(timestamp)
    {
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} ago`
    }

    return (
        <div>
            &nbsp;<i>{timeAgo}</i>
        </div>
    )
}

export default TimeAgo
