import { globalHandeling } from "./middleware/globalHandeling.js";
import { verfifyToken } from "./middleware/verifiyToken.js";
import { messageRouter } from "./modules/message/message.routes.js";
import { userRouter } from "./modules/user/users.routes.js";
import { appError } from "./utils/appError.js";

const bootstrab = function (app) {
  app.use("/users", userRouter);
  app.use(verfifyToken);
  app.use("/messages", messageRouter);
  app.use("*", (req, res, next) => {
    next(new appError(`route not found ${req.originalUrl}`, 404));
  });
  //   error handeling middleware
  app.use(globalHandeling);
};
export default bootstrab;
