const router = require("express").Router();



const {
  models: { User },
} = require("../db");
module.exports = router;

// app.use(express.json());
// const requireToken = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization;
//     const user = await User.findByToken(token);
//     console.log(user)
//     req.user = user;
//     next();
//   } catch (ex) {
//     next(ex);
//   }
// };


// trying to secure these routes... req.headers.authorization is undefined and i cannot figure our how to access the token

router.get("/", async (req, res, next) => {
  try {

    console.log(req.headers.authorization)
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username"],
    });
    res.send(users);
  } catch (err) {
    next(err);
  }
});

//find one specific user info
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// delete student by id
router.delete("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.send(user);
  } catch (error) {
    next(error);
  }
});
