const Star = require("../models/star");

module.exports = class Api {
  static async getData(ctx) {
    ctx.body = { lastResetTime: 1571372840000 };
  }

  static async getWidget(ctx) {
    ctx.body = {
      data: {
        vehiclePerCountry: {
          data: [
            { country: "ABW", count_status: 10, activation: 123 },
            {
              country: "Afghanistan",
              count_status: 23123,
              activation: 1234567
            },
            { country: "AGO", count_status: 0, activation: 12 },
            { country: "ALB", count_status: 0 },
            { country: "AND", count_status: 0 },
            { country: "Angola", count_status: 0 },
            { country: "ARG", count_status: 0 },
            { country: "ARM", count_status: 0 },
            { country: "Armenia", count_status: 0 },
            { country: "ASM", count_status: 0 },
            { country: "ATA", count_status: 0 },
            { country: "AUS", count_status: 4, status: "0" },
            { country: "Australia", count_status: 0 },
            { country: "BEL", count_status: 0 },
            { country: "BOL", count_status: 0 },
            { country: "Bolivia, Plurinational State of", count_status: 0 },
            { country: "CHE", count_status: 0 },
            { country: "China", count_status: 0 },
            { country: "CHN", count_status: 4, status: "0" },
            { country: "CHN", count_status: 0 },
            { country: "CMR", count_status: 0 },
            { country: "CUW", count_status: 0 },
            { country: "CYP", count_status: 0 },
            { country: "IND", count_status: 4, status: "0" },
            { country: "Israel", count_status: 0 },
            { country: "JPN", count_status: 4, status: "0" },
            { country: "JPN", count_status: 2, status: "102" },
            { country: "SWE", count_status: 12, status: "0" },
            { country: "Switzerland", count_status: 0 },
            { country: "Unspecified", count_status: 2, status: "101" },
            { country: "Unspecified", count_status: 2, status: "0" },
            { country: "Unspecified", count_status: 2, status: "102" },
            { country: "USA", count_status: 6, status: "0" }
          ],
          cols: [
            {
              name: "Country",
              key: "country",
              definition: {
                key: "country",
                display_name: "Country",
                data_type: "string",
                data_unit: null,
                data_format: null,
                display_format: null,
                business_type: null,
                business_unit: null
              }
            },
            {
              name: "Total",
              key: "count_status",
              definition: {
                attributes: {
                  field_order: 1
                },
                key: "count_status",
                display_name: "count_status",
                data_type: "number",
                data_unit: null,
                data_format: null,
                display_format: null,
                business_type: null,
                business_unit: "count_status"
              }
            }
          ],
          activation: {
            display_name: "activation",
            key: "activation"
          },
          unit: "vehicles"
        }
      },
      errCode: "ok",
      errMessage: ""
    };
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
