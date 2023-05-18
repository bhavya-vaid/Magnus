const time=new Date();
const hours=time.getHours();
const minutes=time.getMinutes();
const seconds=time.getSeconds();
const timeText = `${hours}:${minutes}:${seconds}`
$("#time").text(timeText);