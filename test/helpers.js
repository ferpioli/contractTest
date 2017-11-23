import supertest from 'supertest';
import chai from 'chai';
import mongodb from 'mongodb';
import lodash from 'lodash';
import joi from 'joi';
import joiAssert from 'joi-assert';


global._ = lodash;


global.request = supertest("localhost:3003");
global.expect = chai.expect;

global.MongoClient = mongodb.MongoClient;
global.mongo_uri = "mongodb://localhost/db_cadastro";
global.joi = joi;
global.joiAssert = joiAssert;