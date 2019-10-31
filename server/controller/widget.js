export const haha = {
  data: [
    { owner_name: "Anders B", use_type: "Unspecified", vehicle_id: 1 },
    { owner_name: "John Barney", use_type: "Unspecified", vehicle_id: 1 },
    {
      owner_name: "Karen Cook-Hellberg",
      use_type: "Cash Allowance",
      vehicle_id: 1
    },
    { owner_name: "Mainak Mitra", use_type: "Cash Allowance", vehicle_id: 1 },
    { owner_name: "Mats Persson", use_type: "Pool", vehicle_id: 1 },
    { owner_name: "Sara K", use_type: "Unspecified", vehicle_id: 1 },
    { owner_name: "Unspecified", use_type: "Cash Allowance", vehicle_id: 4 },
    { owner_name: "Unspecified", use_type: "Operative", vehicle_id: 1 },
    { owner_name: "Unspecified", use_type: "Pool", vehicle_id: 3 },
    { owner_name: "Unspecified", use_type: "Unspecified", vehicle_id: 29 }
  ],
  cols: [
    {
      name: "Owner",
      key: "owner_name",
      definition: {
        key: "owner_name",
        display_name: "Owner",
        data_type: "string",
        data_unit: null,
        data_format: null,
        display_format: null,
        business_type: null,
        business_unit: null,
        attributes: { filter_ids: ["owner"], field_order: 10 }
      }
    },
    {
      name: "Vehicles",
      key: "vehicle_id",
      definition: {
        key: "vehicle_id",
        display_name: "Vehicles",
        data_type: "number",
        data_unit: null,
        data_format: null,
        display_format: null,
        business_type: null,
        business_unit: "vehicles",
        attributes: { field_order: 8 }
      }
    }
  ],
  child_col: {
    key: "use_type",
    definition: {
      key: "use_type",
      display_name: "Use type",
      data_type: "string",
      data_unit: null,
      data_format: null,
      display_format: null,
      business_type: null,
      business_unit: null,
      attributes: {
        filter_ids: ["use_type"],
        field_order: 5,
        mapping_variable: "use_type_mapping"
      }
    }
  },
  unit: "vehicles"
};
