/* 
  Receives a date object and returns a human readable date as a string e.g. 14 hours ago, 2 months ago.
  Useful for displaying messages like "Posted 2 hours ago" or "Last seen 3 days ago".
*/

const string = (interval, unit) => {
  return interval + " " + (interval > 1 ? unit + "s" : unit) + " ago";
};

const humanReadableDate = (date) => {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval >= 1) {
    return string(interval, "year");
  }

  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return string(interval, "month");
  }

  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return string(interval, "week");
  }

  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return string(interval, "hour");
  }

  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return string(interval, "minute");
  }
  
  return "Just now";
};


console.log(humanReadableDate(new Date())); // returns 'Just Now'
