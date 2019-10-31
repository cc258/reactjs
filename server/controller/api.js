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
          // child_col: {
          //   key: "count_status",
          //   definition: {
          //     key: "count_status",
          //     display_name: "count_status",
          //     data_type: "string",
          //     data_unit: null,
          //     data_format: null,
          //     display_format: null,
          //     business_type: null,
          //     business_unit: null,
          //     attributes: {
          //       filter_ids: ["count_status"],
          //       field_order: 5,
          //       mapping_variable: "use_type_mapping"
          //     }
          //   }
          // },
          unit: "vehicles"
        }
      },
      errCode: "ok",
      errMessage: ""
    };
    // ctx.body = {
    //   data: [
    //     {
    //       date: 1571011200.0,
    //       service_name: "Remote climate control",
    //       downlink_cnt: 4
    //     },
    //     {
    //       date: 1571011200.0,
    //       service_name: "Remote door lock",
    //       downlink_cnt: 20
    //     },
    //     {
    //       date: 1571011200.0,
    //       service_name: "Remote door unlock",
    //       downlink_cnt: 8
    //     },
    //     {
    //       date: 1571011200.0,
    //       service_name: "Remote engine start",
    //       downlink_cnt: 6
    //     },
    //     {
    //       date: 1571011200.0,
    //       service_name: "Valet mode",
    //       downlink_cnt: 30
    //     },
    //     {
    //       date: 1571097600.0,
    //       service_name: "Remote climate control",
    //       downlink_cnt: 2
    //     },
    //     {
    //       date: 1571097600.0,
    //       service_name: "Remote door lock",
    //       downlink_cnt: 1
    //     },
    //     {
    //       date: 1571097600.0,
    //       service_name: "Remote door unlock",
    //       downlink_cnt: 1
    //     },
    //     {
    //       date: 1571097600.0,
    //       service_name: "Remote engine start",
    //       downlink_cnt: 2
    //     },
    //     {
    //       date: 1571097600.0,
    //       service_name: "Valet mode",
    //       downlink_cnt: 4
    //     }
    //   ],
    //   cols: [
    //     {
    //       name: "Service name",
    //       key: "service_name",
    //       definition: {
    //         key: "service_name",
    //         display_name: "Service name",
    //         data_type: "string",
    //         data_unit: null,
    //         data_format: null,
    //         display_format: null,
    //         business_type: null,
    //         business_unit: null,
    //         attributes: {
    //           filter_ids: ["remote_service"],
    //           field_order: 3,
    //           mapping_variable: "remote_service_mapping"
    //         }
    //       }
    //     },
    //     {
    //       name: "Requests",
    //       key: "downlink_cnt",
    //       definition: {
    //         key: "downlink_cnt",
    //         display_name: "Requests",
    //         data_type: "number",
    //         data_unit: null,
    //         data_format: null,
    //         display_format: null,
    //         business_type: null,
    //         business_unit: "requests",
    //         attributes: {
    //           digit_grouping: "NONE",
    //           decimal_symbol: "POINT",
    //           field_order: 4
    //         }
    //       }
    //     }
    //   ],
    //   child_col: {
    //     key: "date",
    //     reversed: true,
    //     definition: {
    //       key: "date",
    //       display_name: "Time period",
    //       data_type: "timestamp",
    //       data_unit: null,
    //       data_format: "YYYYMMDD",
    //       display_format: null,
    //       business_type: "datetime",
    //       business_unit: "date",
    //       attributes: {
    //         field_order: 2,
    //         default_sorting: true
    //       }
    //     }
    //   },
    //   unit: "requests"
    // };
    // ctx.body = {
    //   cols: [
    //     { definition: { key: "service_name", name: "Country" } },
    //     { definition: { key: "count_month", name: "Vehicles" } }
    //   ],
    //   child_col: {
    //     definition: {
    //       key: "month"
    //     }
    //   },
    //   unit: "count_month",
    //   data: [
    //     { month: 201909, count_month: 2, service_name: "RSH" },
    //     { month: 201909, count_month: 2, service_name: "RVS" },
    //     { month: 201908, count_month: 2, service_name: "RPP" },
    //     { month: 201909, count_month: 2, service_name: "RVI" },
    //     { month: 201909, count_month: 2, service_name: "RSV" },
    //     { month: 201908, count_month: 2, service_name: "RWS" },
    //     { month: 201909, count_month: 2, service_name: "RPC" },
    //     { month: 201909, count_month: 2, service_name: "RCC" },
    //     { month: 201908, count_month: 23, service_name: "RES" },
    //     { month: 201908, count_month: 20, service_name: "RCE" },
    //     { month: 201909, count_month: 2, service_name: "REC" },
    //     { month: 201908, count_month: 2, service_name: "RTL" },
    //     { month: 201909, count_month: 2, service_name: "RWS" },
    //     { month: 201908, count_month: 2, service_name: "RVS" },
    //     { month: 201908, count_month: 2, service_name: "RVI" },
    //     { month: 201909, count_month: 2, service_name: "RPP" },
    //     { month: 201908, count_month: 2, service_name: "RSV" },
    //     { month: 201908, count_month: 2, service_name: "RSH" },
    //     { month: 201909, count_month: 2, service_name: "RTL" },
    //     { month: 201908, count_month: 2, service_name: "REC" },
    //     { month: 201910, count_month: 5, service_name: "RDU" },
    //     { month: 201909, count_month: 17, service_name: "RES" },
    //     { month: 201909, count_month: 18, service_name: "RCE" },
    //     { month: 201908, count_month: 2, service_name: "RPC" },
    //     { month: 201908, count_month: 4, service_name: "RCC" },
    //     { month: 201910, count_month: 10, service_name: "VAL" },
    //     { month: 201910, count_month: 11, service_name: "RDL" },
    //     { month: 201908, count_month: 2, service_name: "RHL" },
    //     { month: 201908, count_month: 2, service_name: "RTU" },
    //     { month: 201908, count_month: 2, service_name: "DIA" },
    //     { month: 201908, count_month: 2, service_name: "SVT" },
    //     { month: 201910, count_month: 5, service_name: "RCE" },
    //     { month: 201910, count_month: 9, service_name: "RES" },
    //     { month: 201909, count_month: 18, service_name: "RDU" },
    //     { month: 201909, count_month: 19, service_name: "RDL" },
    //     { month: 201909, count_month: 35, service_name: "VAL" },
    //     { month: 201909, count_month: 2, service_name: "JOU" },
    //     { month: 201909, count_month: 2, service_name: "SVT" },
    //     { month: 201909, count_month: 2, service_name: "DIA" },
    //     { month: 201909, count_month: 2, service_name: "RTU" },
    //     { month: 201909, count_month: 2, service_name: "RHL" },
    //     { month: 201908, count_month: 2, service_name: "JOU" },
    //     { month: 201908, count_month: 29, service_name: "VAL" },
    //     { month: 201908, count_month: 24, service_name: "RDL" },
    //     { month: 201908, count_month: 25, service_name: "RDU" }
    //   ]
    // };
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
