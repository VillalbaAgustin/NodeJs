const os = require('node:os');

// console.log(os.userInfo())

console.table({
  nombreOs: os.platform(),
  Version: os.release(),
  Arquitectura: os.arch(),
  freeMemory: os.freemem()/1024/1024/1024,
  totalMemory: os.totalmem()/1024/1024/1024,
  tiempoEncendido: os.uptime()/60/60/24,  //en días
})

// console.log(os.cpus());
