'use strict'
import { STR } from './constant.js'
import $ from 'jquery'
let str = STR

class App{
    constructor(name) {
        this.name = name
    }
    get(fields){
        console.log(`Loading is: ${this.name}`)
    }

}
$('body').html(str)
let app = new App(str)
app.get('name')