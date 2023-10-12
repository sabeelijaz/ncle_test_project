import * as express from 'express';
import App from '../../src/app';
import mockTasks from "../mock/tasks.json";
import TaskStore from '../../src/store';
import Task from '../../src/interfaces/Task';

export default class IntegrationHelpers {

    public static appInstance: express.Application;

    store = TaskStore.getTaskStore();

    constructor () {
        this.populateStore();
    }

    public static getApp(): express.Application {
        if (this.appInstance) {
            return this.appInstance;
        }
        this.appInstance = App;

        return this.appInstance;
    }

    populateStore () {
        this.store = mockTasks as any;
    }
}