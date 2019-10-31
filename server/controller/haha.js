export const haha = {
  data: [
    {
      month: 1561939200,
      vehicle_id: 19
    },
    {
      month: 1564617600,
      vehicle_id: 34
    },
    {
      month: 1567296000,
      vehicle_id: 7
    },
    {
      month: 1569888000,
      vehicle_id: 22
    }
  ],
  cols: [
    {
      name: "Time period",
      key: "month",
      reversed: true,
      definition: {
        key: "month",
        display_name: "Time period",
        data_type: "timestamp",
        data_unit: null,
        data_format: "YYYYMM",
        display_format: null,
        business_type: "datetime",
        business_unit: "month",
        attributes: {
          filter_ids: ["timeframe"],
          field_order: 2,
          default_sorting: true
        }
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
        attributes: {
          field_order: 1
        }
      }
    }
  ],
  unit: "vehicles"
};

export const aa = {
  widget: {
    _id: "177f0b2c-f3e4-11e9-a9b3-000d3ab1d090",
    title: "Remote service usage",
    subtitle: "Total requests/year",
    bokeh_plot_json: null,
    bokeh_plot_id: "177f0b2c-f3e4-11e9-a9b3-000d3ab1d090",
    x: 0,
    y: 4,
    width: 1,
    height: 2,
    legend:
      '{"data": [{"year": 1546300800.0, "service_name": "Remote diagnostics", "downlink_cnt": 33}, {"year": 1546300800.0, "service_name": "Journey log", "downlink_cnt": 35}, {"year": 1546300800.0, "service_name": "Remote climate control (non-engine)", "downlink_cnt": 49}, {"year": 1546300800.0, "service_name": "Remote climate control", "downlink_cnt": 225}, {"year": 1546300800.0, "service_name": "Remote door lock", "downlink_cnt": 439}, {"year": 1546300800.0, "service_name": "Remote door unlock", "downlink_cnt": 344}, {"year": 1546300800.0, "service_name": "Remote EV charging, schedule", "downlink_cnt": 33}, {"year": 1546300800.0, "service_name": "Remote engine start", "downlink_cnt": 379}, {"year": 1546300800.0, "service_name": "Remote honk & light", "downlink_cnt": 33}, {"year": 1546300800.0, "service_name": "Remote PM 2.5 clean", "downlink_cnt": 33}, {"year": 1546300800.0, "service_name": "Remote Pull PM 2.5", "downlink_cnt": 33}, {"year": 1546300800.0, "service_name": "Remote seat heat", "downlink_cnt": 33}, {"year": 1546300800.0, "service_name": "Remote seat ventilate", "downlink_cnt": 33}, {"year": 1546300800.0, "service_name": "Remote trunk lock", "downlink_cnt": 33}, {"year": 1546300800.0, "service_name": "Remote trunk unlock", "downlink_cnt": 33}, {"year": 1546300800.0, "service_name": "Remote vehicle immobilization", "downlink_cnt": 42}, {"year": 1546300800.0, "service_name": "On-demand Remote status & dashboard", "downlink_cnt": 33}, {"year": 1546300800.0, "service_name": "Remote close/open window/sunroof", "downlink_cnt": 33}, {"year": 1546300800.0, "service_name": "SVT", "downlink_cnt": 33}, {"year": 1546300800.0, "service_name": "Valet mode", "downlink_cnt": 1344}], "cols": [{"name": "Service name", "key": "service_name", "definition": {"key": "service_name", "display_name": "Service name", "data_type": "string", "data_unit": null, "data_format": null, "display_format": null, "business_type": null, "business_unit": null, "attributes": {"filter_ids": ["remote_service"], "field_order": 3, "mapping_variable": "remote_service_mapping"}}}, {"name": "Requests", "key": "downlink_cnt", "definition": {"key": "downlink_cnt", "display_name": "Requests", "data_type": "number", "data_unit": null, "data_format": null, "display_format": null, "business_type": null, "business_unit": "requests", "attributes": {"digit_grouping": "NONE", "decimal_symbol": "POINT", "field_order": 4}}}], "child_col": {"key": "year", "reversed": true, "definition": {"key": "year", "display_name": "Time period", "data_type": "timestamp", "data_unit": null, "data_format": "YYYY", "display_format": null, "business_type": "datetime", "business_unit": "year", "attributes": {"field_order": 2, "default_sorting": true}}}, "unit": "requests"}',
    sort_by: null,
    cached_time: 1572318256,
    filter_value: { vehicle_type: "__all__", remote_service: "__all__" },
    unit: "requests",
    dashboard_id: "67d74106-aeb2-11e9-aa8f-000d3ab1d090",
    template_id: "eb630941-294b-45ba-a1bb-51fec9aec47d",
    title_key: "Remote service usage",
    template: {
      _id: "eb630941-294b-45ba-a1bb-51fec9aec47d",
      category: "Remote service usage",
      subcategory: "Total requests/year",
      chart_type: "echarts_multiline",
      chart_setting: {
        x_field: "year",
        y_field: "downlink_cnt",
        y_field_aggregate: "sum",
        group_field: "service_name",
        is_frontend_render: true
      },
      dataset_meta_id: "telematics_statistics_yearly",
      addtional_datasets: null,
      required_fields: {
        year: {
          data_type: "number",
          data_format: "YYYY",
          business_type: "datetime",
          business_unit: "year"
        },
        downlink_cnt: { data_type: "number", business_unit: "requests" },
        service_name: { data_type: "string" }
      },
      filters: ["vehicle_type", "remote_service"],
      order: 303,
      defined: true
    }
  }
};
