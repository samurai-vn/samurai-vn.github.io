function logErrors(err, req, res, next) {
    console.error(err.stack);
    console.log("logErrors");
    next(err);
 }
 function clientErrorHandler(err, req, res, next) {
    if(req.xhr) {
        console.log("clientErrorHandler");
        res.status(500).send({error: 'Something failed!'});
    } else {
        next(err);
    }
 }
 function errorHandler(err, req, res, next) {
    console.log("errorHandler");
    res.status(500);
    res.send('error');
 }

exports.logErrors = logErrors;
exports.clientErrorHandler = clientErrorHandler;
exports.errorHandler = errorHandler;