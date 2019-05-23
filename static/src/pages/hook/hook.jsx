import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";

class Hook extends React.Component {
  state = {
    d: {
      "report.header.title": "Reports",
      "report.noData.text": "No Data",
      "report.unspecified": "Unspecified",

      "reportTab.button.vehicles.text": "Vehicles",
      "reportTab.button.drivers.text": "Drivers",
      "reportTab.button.operators.text": "Operators",

      "reportTemplates.header.title": "Report templates",
      "reportTemplates.hint.text":
        "HINT: Select a template and edit it to generate customized reports",
      "reportTemplates.operations.name": "Vehicle Operations and Utilization",
      "reportTemplates.operations.desc":
        "This is some long description of the report",
      "reportTemplates.fuel.name": "Fuel Consumption",
      "reportTemplates.battery.name": "Battery Consumption",
      "reportTemplates.fuel.desc":
        "Average fuel consumption and daily trend for selected time period.",
      "reportTemplates.battery.desc":
        "Average battery consumption and daily trend for selected time period.",
      "reportTemplates.driving.name": "Driving Events and Eco Score",
      "reportTemplates.driving.desc":
        "Count of driving events and Eco score trend for selected time period.",
      "reportTemplates.trip.name": "Trip report",
      "reportTemplates.trip.desc":
        "This is some long description of the report",
      "reportTemplates.fleetComposition.name": "Fleet Composition",
      "reportTemplates.fleetComposition.desc":
        "Monthly vehicles count of selected organization(s).",
      "reportTemplates.fleetCost.name": "Fleet Cost",
      "reportTemplates.fleetCost.desc":
        "Monthly vehicles cost of selected organization(s).",
      // reportTemplates.columnSelection.driving
      "reportTemplates.columnSelection.driving.DriverName": "Driver",
      "reportTemplates.columnSelection.driving.DriverId": "Driver ID",
      "reportTemplates.columnSelection.driving.LicensePlate": "License plate",
      "reportTemplates.columnSelection.driving.avg_avgecoscore":
        "Avg Eco Score",
      "reportTemplates.columnSelection.driving.sum_distance": "Distance",
      "reportTemplates.columnSelection.driving.max_maxspeed": "Speed Max",
      "reportTemplates.columnSelection.driving.avg_avgspeed": "Speed Avg",
      "reportTemplates.columnSelection.driving.sum_eventsbrake": "Events Brake",
      "reportTemplates.columnSelection.driving.sum_eventsacc": "Events Acc",
      "reportTemplates.columnSelection.driving.sum_eventscor": "Events Cor",
      "reportTemplates.columnSelection.driving.sum_eventoverrev":
        "Events Harsh RPM",
      "reportTemplates.columnSelection.driving.sum_totalevents": "Total Events",
      "reportTemplates.columnSelection.driving.sum_duration": "Duration",
      "reportTemplates.columnSelection.driving.sum_idletime": "Idle Time",
      "reportTemplates.columnSelection.driving.avg_avgco2": "Avg CO2",
      "reportTemplates.columnSelection.driving.min_greenband": "Green Band",
      // reportTemplates.columnSelection.fuel
      "reportTemplates.columnSelection.fuel.TimeStamp": "Date",
      "reportTemplates.columnSelection.fuel.sum_distance": "Distance",
      "reportTemplates.columnSelection.fuel.sum_triptime": "Trip Time",
      "reportTemplates.columnSelection.fuel.sum_idletime": "Idle Time",
      "reportTemplates.columnSelection.fuel.sum_fuelconsumption":
        "Fuel Consumption",
      "reportTemplates.columnSelection.fuel.avg_avgfuelconsumption":
        "Avg Fuel Consumption",
      "reportTemplates.columnSelection.fuel.sum_co2": "CO2",
      "reportTemplates.columnSelection.fuel.avg_avgco2": "Avg CO2",

      "reportEditor.header.title": "Edit report",
      "reportEditor.button.cancel": "Cancel",
      "reportEditor.button.generate": "Generate",
      "reportEditor.button.schedule": "Schedule",
      "reportEditor.button.save": "Save as draft",
      "reportEditor.reportName.label": "Report name",
      "reportEditor.reportName.beginText": "",
      "reportEditor.dateRange.title": "Date range",
      "reportEditor.columnSelection.title": "Column selection",
      "reportEditor.columnSelection.checkbox.all": "All",
      "reportEditor.radioButton.generate": "Generate now",
      "reportEditor.radioButton.scheduled": "Scheduled report",
      "reportEditor.fleet.selectType.title": "Bars in the chart shows",
      "reportEditor.fleet.stackBy.desc": "Or stack by",
      "reportEditor.fleet.selectType.totals": "Just totals",
      "reportEditor.fleet.selectType.vehicleType": "Vehicle type",
      "reportEditor.fleet.selectType.ownership": "Ownership",
      "reportEditor.fleet.selectType.useType": "Use type",

      "report.fleetDetail.desc.organization": "Organization:",
      "report.fleetDetail.desc.monthRange": "Month range:",

      "reportGrid.header.title": "My reports",
      "reportGrid.column.reportName": "Report",
      "reportGrid.column.status": "Status",
      "reportGrid.column.status.scheduled": "Scheduled",
      "reportGrid.column.status.completed": "Completed",
      "reportGrid.column.status.failed": "Failed",
      "reportGrid.column.status.draft": "Draft",
      "reportGrid.column.template": "Template",
      "reportGrid.column.scheduleTime": "Last run",
      "reportGrid.column.modificationTime": "Date modified",
      "reportGrid.updateGridRow.showTip.scheduled": "report was scheduled",
      "reportGrid.updateGridRow.showTip.completed": "report was completed",
      "reportGrid.updateMoreRow.message":
        "you can only select one row to update",
      "reportGrid.deleteMoreRow.message":
        "you can only select one row to delete",

      "reportDetail.reportList.title": "Details",
      "reportDetail.inConstruction.message":
        "Sorry, this service is under construction",
      "reportDetail.avgFuelChart.title": "Average fuel consumption",
      "reportDetail.avgBatteryChart.title": "Average battery consumption",
      "reportDetail.dailyFuelChart.title": "Daily fuel consumption trend",
      "reportDetail.dailyBatteryChart.title": "Daily battery consumption trend",
      "reportDetail.drivingEventsChart.title": "Total driving events",
      "reportDetail.ecoScoreChart.title": "Average Eco Score trend",

      // Report.favourites
      "favourites.ReportFavorites": "Report favorites",
      "favourites.title": "My favorite reports",

      // fleet utilization
      "fleet.utilization.title": "Fleet Utilization",
      "cost.report.title": "Vehicle Cost"
    }
  };
  formatData = () => {
    const { d } = this.state;
    const result = {};
    for (let k of Object.keys(d)) {
      result[k] = k;
    }
    console.log("result : ", JSON.stringify(result));
  };
  render = () => {
    return <div>{this.formatData()}</div>;
  };
}

export default injectIntl(Hook);
