// import express from "express";
import {request,Router} from  "express";
import {Express} from 'express';
import { UsersController } from "../controllers/UsersController";
const usersController = new UsersController();
import { createServer} from "http";
const routes = Router();

routes.get("/pages/blog", (request,response) => {
    return response.render("../views/index");
});

routes.post('/users', usersController.create);



export { routes };