export default {
    port: parseInt(process.env.PORT) || 8080,
    nodeEnv: process.env.NODE_ENV || 'production',
    saltRounds: parseInt(process.env.SALT_ROUNDS) || 10,
    jwtAccessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET || 'b08253f0375a450bd5d496b8256d5cb5e4bce0a1af84fee57c645d2bc4732808',
    jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET || 'd8272f2e853edbf518028a7e3f698b851be305b1d0d6ad94287827a3a835dadd',
};