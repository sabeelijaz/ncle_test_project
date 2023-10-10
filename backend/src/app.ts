import createError from "http-errors";
import express, { Request, Response } from "express";
import logger from "morgan";
import path from "path";

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/health", (req: Request, res: Response) => {
    res.send("Ok");
})


// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next) {
    next(createError(404));
});


// error handler
app.use(function (err, req: Request, res: Response, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

export default app;