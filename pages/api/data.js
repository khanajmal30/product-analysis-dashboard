import { read, utils } from 'xlsx';
import { join } from 'path';
import { readFileSync } from 'fs';

export default function handler(req, res) {
    const workbook = read(readFileSync(join(process.cwd(), 'public/data/data.xlsx')));
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = utils.sheet_to_json(worksheet);

    res.status(200).json(jsonData);
}
