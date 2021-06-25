// import express from "express";
import {request,response,Router} from  "express";
import {Express} from 'express';
import { UsersController } from "../controllers/UsersController";
import { createServer} from "http";
const routes = Router();

const usersController = new UsersController();

routes.get("/pages/blog", (request,response) => {
    return response.render("../views/index");
});
routes.post("/blog", (request,response) => {
    return response.render("../views/blog");
});
routes.post("/users", usersController.handle);




export { routes };