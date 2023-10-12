import createError from "http-errors";
import express, { Request, Response, NextFunction } from "express";
import logger from "morgan";
import path from "path";

// Routes
import TaskRouter from "./routes/task.route";

const app: express.Application = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/health", (req: Request, res: Response) => {
    res.send("Ok");
})


app.use('/', TaskRouter);


// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next) {
    next(createError(404));
});


// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

export default app;