import { readFile } from 'fs/promises';

const readThemeConfig = async () => {
    const res = await readFile('./Noctur-theme-config.json', 'utf8');
    console.log(res);
};

readThemeConfig();
