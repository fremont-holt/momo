const program = require('commander');
const wallpaper = require('wallpaper');
const path = require('path');

program.version('0.0.1').description('Use this app to Momo your friends.');

program
  .command('run')
  .alias('r')
  .description('Change desktop background to Momo')
  .action(async () => {
    const momo = path.join(__dirname, '/image', 'momo.jpg');
    const desktop = await wallpaper.set(momo);
    console.log(desktop);
  });

program
  .command('back')
  .alias('b')
  .description('Change desktop background to your name')
  .action(async () => {
    const yn = path.join(__dirname, '/image', 'yourname.jpg');
    const desktop = await wallpaper.set(yn);
    console.log(desktop);
  });

program.parse(process.argv);
