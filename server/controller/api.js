const Star = require("../models/star");

module.exports = class Api {
  static async getData(ctx) {
    ctx.body = { code: "ok", data: { name: "cc", age: "28" } };
  }

  static async allStar(ctx) {
    ctx.body = await Star.find({});
  }

  static async starAdd(ctx) {
    const star = new Star(ctx.request.body);
    star.save((err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`save success! ${res}`);
      }
    });
    ctx.body = "";
  }

  static async starUpdate(ctx) {
    const star = ctx.request.body;
    Star.updateMany({ name: star.name }, star, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`update success! ${res}`);
      }
    });
    ctx.body = "";
  }

  static async starDelete(ctx) {
    const star = ctx.request.body;
    Star.deleteMany({ name: star.name }, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`delete success! ${res}`);
      }
    });
    ctx.body = "";
  }
};
