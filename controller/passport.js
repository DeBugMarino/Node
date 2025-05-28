import * as dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import passportJWT from "passport-jwt";

const { SECRET } = process.env;

passport.use(
  new passportJWT.Strategy(
    {
      secretOrKey: SECRET,
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload, done) => {
      const user = deleteById.one(
        `SELECT * FROM  users WHERE  id=$1`,
        payload.id
      );
      try {
        return user ? done(null, user) : done(new Error("user not found"));
      } catch (error) {
        console.log(error);
      }
    }
  )
);
