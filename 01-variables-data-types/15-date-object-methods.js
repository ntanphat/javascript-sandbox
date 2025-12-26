let x;
const d = new Date();

x = d.getFullYear();

x = d.getMonth();
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
x;

x = Intl.DateTimeFormat('en-US').format(d);
x;
x = Intl.DateTimeFormat('en-GB').format(d);
x = d.toLocaleString('dafault',{month: 'long'});
x;
x = d.toLocaleString('dafault',{month: 'short'});
x;

x = d.toLocaleString('dafault',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
day:'numeric',
hour:'numeric',
minute:'numeric',
second:'numeric',
timeZone:'Asia/Ho_Chi_Minh'});
x;