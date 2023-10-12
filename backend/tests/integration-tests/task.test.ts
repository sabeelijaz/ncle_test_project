import 'jest';
import express from 'express';
import request from 'supertest';
import ResponseCode from 'http-errors';
import IntegrationHelpers from '../helpers/integration-helper';

describe('task integration tests', () => {
    let app: express.Application;

    beforeAll(() => {
        app = IntegrationHelpers.getApp();
    });

    describe('create task', () => {
        it('should create task', async () => {
            const payload = {
                "title": "test2",
                "description": "",
                "dueDate": "2023-10-10",
                "assignedTo": "test",
                "category": "test",
                "status": ""
            };

            await request(app)
                .post('/task')
                .send(payload)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect((res: request.Response) => {
                    console.log(res.text);
                })
                .expect(200);
        });

        it('should return error if payload is missing', async () => {
            await request(app)
                .post('/task')
                .send()
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect((res: request.Response) => {
                    console.log(res.text);
                })
                .expect(400);
        });
    })

    describe('update task', () => {
        it('should update task', async () => {
            const payload = {
                "id" : 2,
                "title": "test2",
                "description": "",
                "dueDate": "2023-10-10",
                "assignedTo": "test",
                "category": "test",
                "status": ""
            };

            await request(app)
                .put('/task')
                .send(payload)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect((res: request.Response) => {
                    console.log(res.text);
                })
                .expect(200);
        });

        it('should return error if payload is missing', async () => {
            await request(app)
                .put('/task')
                .send()
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect((res: request.Response) => {
                    console.log(res.text);
                })
                .expect(400);
        });
    })

    describe('get all tasks', () => {
        it('should return task array', async () => {
            await request(app)
                .get('/tasks')
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect((res: request.Response) => {
                    console.log(res.text);
                })
                .expect(200);
        });
    })

    describe('get task by id', () => {
        it('should return task data', async () => {
            const id = 1;
            await request(app)
                .get('/task/' + id)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect((res: request.Response) => {
                    console.log(res.text);
                })
                .expect(200);
        });

        it('should return error if record not found', async () => {
            const id = 6;
            await request(app)
                .get('/task/' + id)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect((res: request.Response) => {
                    console.log(res.text);
                })
                .expect(404);
        });
    })

    describe('delete task by id', () => {
        it('should delete task data', async () => {
            const id = 1;
            await request(app)
                .delete('/task/' + id)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect((res: request.Response) => {
                    console.log(res.text);
                })
                .expect(200);
        });
    })
})

    // it('can get server time', async () => {
    //     await request(app)
    //         .get('/api/status/time')
    //         .set('Accept', 'application/json')
    //         .expect((res: request.Response) => {
    //             console.log(res.text);
    //         })
    //         .expect(200);
    // });
