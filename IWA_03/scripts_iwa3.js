// scripts.js

import {comany} from './configurations.js'
import {year} from'./configurations.js'

console.log(comany, year);

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message