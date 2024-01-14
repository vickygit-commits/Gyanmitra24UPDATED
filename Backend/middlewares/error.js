const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if (process.env.NODE_ENV === 'development') {
        res.status(err.statusCode).json({
            success: false,
            message: err.message,
            stack: err.stack,
            error: err
        });
    }

    if (process.env.NODE_ENV === 'production') {
        let message = err.message;
        let error = new Error(message);

        if (err.name === "ValidationError") {
            message = Object.values(err.errors).map(value => value.message);
            error = new ErrorHandler(message, 400);
        }

        if (err.code === 11000) {
            message = "Existing Mobile Number or Email-ID.Check IT";
            error = new ErrorHandler(message, 500);
        }
        if(err.name==='JSONWebTokenError')
        {
            let message='JSON web token is invalid. Try again';
            error = new ErrorHandler(message)
        }
        if(err.name==='TokenExpiredError')
        {
            let message='JSON web token is expired. Try again';
            error = new ErrorHandler(message)
        }
        if(err.code==='CastError')
        {
            message=`Resource Not Found ${err.path}`;
            error = new ErrorHandler(message);


        }
        res.status(err.statusCode).json({
            success: false,
            message: error.message || 'Internal Server Error',
        });
    }
};
