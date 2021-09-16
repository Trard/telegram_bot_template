function logger(logger) {
    return async (ctx, next) => {
        await next();
        logger.info(ctx);
    };
}

module.exports = logger;
