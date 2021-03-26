import * as AdmZip from 'adm-zip';

const bundle = async () => {
  try {
    console.debug('bundling dist folder...');
    const zip = new AdmZip();
    zip.addLocalFolder(`dist`, 'dist');
    zip.addLocalFile(`package.json`);
    zip.writeZip(`dist/dist.zip`);
  } catch (err) {
    console.error('failed to zip azure bundle', err);
  }
};

bundle();
