// truncate string to length

function truncateText(string,maxLength ){

    const truncatedString = string.split('').splice(0,maxLength).join('') + '...'
  
    return truncatedString
  }
  console.log(truncateText('subscribe to waffle ',9))