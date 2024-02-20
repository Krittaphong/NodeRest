const express = require('express');
const Sequelize = require('sequelize');
const app = express();

app.use(express.json());

const dbUrl = 'postgres://wedadmin:PPLkiz14317@node58309-krittaphong.proen.app.ruk-com.cloud:11750/Books'

const sequelize = new Sequelize(dbUrl);