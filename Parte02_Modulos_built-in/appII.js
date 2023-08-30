// console.log(process);
// console.log(process.env);

// console.log(process.argv);
/*
output:
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Node.js\\NODE REVIEW\\Parte02_Modulos_built-in\\appII.js'
]
*/

// console.log(process.argv);
// C:\...>node appII.js 6 7 8
/*
output:
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Node.js\\NODE REVIEW\\Parte02_Modulos_built-in\\appII.js',
  '6',
  '7',
  '8'
]
*/

/*
  console.log(process.argv[2]);
  console.log(process.argv[3]);
  console.log(process.argv[4]);

  C:\...>node appII.js 6 7 8

  output:
  6
  7
  8
*/

for (let i = 0; i < process.argv.length; i++) {
  console.log(process.argv[i]);
}
//
console.log(process.memoryUsage());