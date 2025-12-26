let d;

d = new Date();
d;

d = d.toString();
d;

d = new Date(2025,6,12,15,30)
d;

d = new Date('2025-07-12T08:30:00');
d;

d = new Date('12/07/2025 08:30:00');
d;

d = new Date('07-10-2022');
d;

d = Date.now();
d;

d = new Date('07-10-2025');
d = d.getTime();
d;

d = d.valueOf();
d;

d = new Date(1752080400000);
d;

d = Math.floor(Date.now() / 1000);
d;