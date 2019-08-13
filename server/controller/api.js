module.exports = class UserController {
  static async getData(ctx) {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.body = { code: "ok", data: { name: "cc", age: "28" } };
  }
};
