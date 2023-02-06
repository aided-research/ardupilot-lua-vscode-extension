/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.onvif_autocomplete = exports.vehicle_autocomplete = exports.serialLED_autocomplete = exports.SRV_Channels_autocomplete = exports.rc_autocomplete = exports.serial_autocomplete = exports.baro_autocomplete = exports.optical_flow_autocomplete = exports.esc_telem_autocomplete = exports.param_autocomplete = exports.mission_autocomplete = exports.RPM_autocomplete = exports.button_autocomplete = exports.LED_autocomplete = exports.quadplane_autocomplete = exports.MotorsMatrix_autocomplete = exports.frsky_sport_autocomplete = exports.attitude_control_autocomplete = exports.Motors_6DoF_autocomplete = exports.gpio_autocomplete = exports.analog_autocomplete = exports.Motors_dynamic_autocomplete = exports.ins_autocomplete = exports.periph_autocomplete = exports.FWVersion_autocomplete = exports.motors_autocomplete = exports.mount_autocomplete = exports.winch_autocomplete = exports.RC_Channel_ud_autocomplete = exports.AP_HAL__UARTDriver_ud_autocomplete = exports.AP_HAL__I2CDevice_ud_autocomplete = exports.AP_HAL__AnalogSource_ud_autocomplete = exports.ScriptingCANBuffer_ud_autocomplete = exports.AP_EFI_Backend_ud_autocomplete = exports.Location_ud_autocomplete = exports.Quaternion_ud_autocomplete = exports.Vector3f_ud_autocomplete = exports.Vector2f_ud_autocomplete = exports.Parameter_ud_autocomplete = exports.mavlink_mission_item_int_t_ud_autocomplete = exports.PWMSource_ud_autocomplete = exports.motor_factor_table_ud_autocomplete = exports.CANFrame_ud_autocomplete = exports.CAN_autocomplete = exports.efi_autocomplete = exports.Cylinder_Status_ud_autocomplete = exports.EFI_State_ud_autocomplete = exports.i2c_autocomplete = exports.logger_autocomplete = exports.uint32_t_ud_autocomplete = void 0;
exports.scripting_autocomplete = exports.follow_autocomplete = exports.AC_AttitudeControl_autocomplete = exports.ahrs_autocomplete = exports.arming_autocomplete = exports.battery_autocomplete = exports.gps_autocomplete = exports.notify_autocomplete = exports.proximity_autocomplete = exports.rangefinder_autocomplete = exports.terrain_autocomplete = exports.relay_autocomplete = exports.gcs_autocomplete = void 0;
const vscode = __webpack_require__(1);
exports.uint32_t_ud_autocomplete = [
    { name: "tofloat", detail: "returns -> number", documentation: new vscode.MarkdownString("Convert to number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "toint", detail: "returns -> integer", documentation: new vscode.MarkdownString("Convert to integer  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.logger_autocomplete = [
    { name: "write", detail: "returns -> nothing", documentation: new vscode.MarkdownString("write value to data flash log with given types and names, optional units and multipliers, timestamp will be automatically added  \n@param name string  \n@param labels string  \n@param format string  \n@param units? string  \n@param multipliers? string  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.i2c_autocomplete = [
    { name: "get_device", detail: "returns -> AP_HAL__I2CDevice_ud", documentation: new vscode.MarkdownString("get a i2c device handler  \n@param bus integer  \n@param address integer  \n@param clock? uint32_t_ud  \n@param smbus? boolean  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.EFI_State_ud_autocomplete = [
    { name: "pt_compensation", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "throttle_out", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "ignition_voltage", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "cylinder_status", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value Cylinder_Status_ud  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "ecu_index", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "throttle_position_percent", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "estimated_consumed_fuel_volume_cm3", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "fuel_consumption_rate_cm3pm", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "fuel_pressure", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "oil_temperature", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "oil_pressure", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "coolant_temperature", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "intake_manifold_temperature", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "intake_manifold_pressure_kpa", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "atmospheric_pressure_kpa", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "spark_dwell_time_ms", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "engine_speed_rpm", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value uint32_t_ud  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "engine_load_percent", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "general_error", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value boolean  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "last_updated_ms", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value uint32_t_ud  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.Cylinder_Status_ud_autocomplete = [
    { name: "lambda_coefficient", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "exhaust_gas_temperature", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "cylinder_head_temperature", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "injection_time_ms", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "ignition_timing_deg", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.efi_autocomplete = [
    { name: "get_backend", detail: "returns -> AP_EFI_Backend_ud", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.CAN_autocomplete = [
    { name: "get_device", detail: "returns -> ScriptingCANBuffer_ud", documentation: new vscode.MarkdownString("get a CAN bus device handler first scripting driver  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_device2", detail: "returns -> ScriptingCANBuffer_ud", documentation: new vscode.MarkdownString("get a CAN bus device handler second scripting driver  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.CANFrame_ud_autocomplete = [
    { name: "dlc", detail: "returns -> integer", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "dlc", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "data", detail: "returns -> integer", documentation: new vscode.MarkdownString("get array field  \n@param index integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "data", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set array field  \n@param index integer  \n@param value integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "id", detail: "returns -> uint32_t_ud", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "id", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value uint32_t_ud  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "isErrorFrame", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "isRemoteTransmissionRequest", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "isExtended", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "id_signed", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.motor_factor_table_ud_autocomplete = [
    { name: "throttle", detail: "returns -> number", documentation: new vscode.MarkdownString("get array field  \n@param index integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "throttle", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set array field  \n@param index integer  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "yaw", detail: "returns -> number", documentation: new vscode.MarkdownString("get array field  \n@param index integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "yaw", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set array field  \n@param index integer  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "pitch", detail: "returns -> number", documentation: new vscode.MarkdownString("get array field  \n@param index integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "pitch", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set array field  \n@param index integer  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "roll", detail: "returns -> number", documentation: new vscode.MarkdownString("get array field  \n@param index integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "roll", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set array field  \n@param index integer  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.PWMSource_ud_autocomplete = [
    { name: "get_pwm_avg_us", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_pwm_us", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_pin", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.mavlink_mission_item_int_t_ud_autocomplete = [
    { name: "current", detail: "returns -> integer", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "current", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "frame", detail: "returns -> integer", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "frame", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "command", detail: "returns -> integer", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "command", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "seq", detail: "returns -> integer", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "seq", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "z", detail: "returns -> number", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "z", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "y", detail: "returns -> integer", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "y", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "x", detail: "returns -> integer", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "x", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "param4", detail: "returns -> number", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "param4", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "param3", detail: "returns -> number", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "param3", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "param2", detail: "returns -> number", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "param2", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "param1", detail: "returns -> number", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "param1", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.Parameter_ud_autocomplete = [
    { name: "set_default", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "configured", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_and_save", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "init_by_info", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param key integer  \n@param type integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "init", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param name string  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.Vector2f_ud_autocomplete = [
    { name: "copy", detail: "returns -> Vector2f_ud", documentation: new vscode.MarkdownString("copy  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "y", detail: "returns -> number", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "y", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "x", detail: "returns -> number", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "x", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "rotate", detail: "returns -> nothing", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "is_zero", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "is_inf", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "is_nan", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "normalize", detail: "returns -> nothing", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "length", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "angle", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.Vector3f_ud_autocomplete = [
    { name: "copy", detail: "returns -> Vector3f_ud", documentation: new vscode.MarkdownString("copy  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "z", detail: "returns -> number", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "z", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "y", detail: "returns -> number", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "y", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "x", detail: "returns -> number", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "x", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "scale", detail: "returns -> Vector3f_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "cross", detail: "returns -> Vector3f_ud", documentation: new vscode.MarkdownString("@param vector Vector3f_ud  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "dot", detail: "returns -> number", documentation: new vscode.MarkdownString("@param vector Vector3f_ud  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "is_zero", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "is_inf", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "is_nan", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "normalize", detail: "returns -> nothing", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "length", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "angle", detail: "returns -> number", documentation: new vscode.MarkdownString("Computes angle between this vector and vector v2  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "rotate_xy", detail: "returns -> nothing", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "xy", detail: "returns -> Vector2f_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.Quaternion_ud_autocomplete = [
    { name: "q4", detail: "returns -> number", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "q4", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "q3", detail: "returns -> number", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "q3", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "q2", detail: "returns -> number", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "q2", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "q1", detail: "returns -> number", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "q1", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "earth_to_body", detail: "returns -> nothing", documentation: new vscode.MarkdownString("Applies rotation to vector argument  \n@param vec Vector3f_ud  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "inverse", detail: "returns -> Quaternion_ud", documentation: new vscode.MarkdownString("Returns inverse of quaternion  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "from_angular_velocity", detail: "returns -> nothing", documentation: new vscode.MarkdownString("Integrates angular velocity over small time delta  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "from_axis_angle", detail: "returns -> nothing", documentation: new vscode.MarkdownString("Constructs Quaternion from axis and angle  \n@param axis Vector3f_ud  \n@param angle number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "to_axis_angle", detail: "returns -> nothing", documentation: new vscode.MarkdownString("Converts Quaternion to axis-angle representation  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "from_euler", detail: "returns -> nothing", documentation: new vscode.MarkdownString("Construct quaternion from Euler angles  \n@param roll number  \n@param pitch number  \n@param yaw number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_euler_yaw", detail: "returns -> number", documentation: new vscode.MarkdownString("Returns yaw component of quaternion  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_euler_pitch", detail: "returns -> number", documentation: new vscode.MarkdownString("Returns pitch component of quaternion  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_euler_roll", detail: "returns -> number", documentation: new vscode.MarkdownString("Returns roll component of quaternion  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "normalize", detail: "returns -> nothing", documentation: new vscode.MarkdownString("Mutates quaternion have length 1  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "length", detail: "returns -> number", documentation: new vscode.MarkdownString("Returns length or norm of quaternion  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.Location_ud_autocomplete = [
    { name: "copy", detail: "returns -> Location_ud", documentation: new vscode.MarkdownString("copy  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "loiter_xtrack", detail: "returns -> boolean", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "loiter_xtrack", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value boolean  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "origin_alt", detail: "returns -> boolean", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "origin_alt", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value boolean  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "terrain_alt", detail: "returns -> boolean", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "terrain_alt", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value boolean  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "relative_alt", detail: "returns -> boolean", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "relative_alt", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value boolean  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "alt", detail: "returns -> integer", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "alt", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "lng", detail: "returns -> integer", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "lng", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "lat", detail: "returns -> integer", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "lat", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set field  \n@param value integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_alt_frame", detail: "returns -> integer", documentation: new vscode.MarkdownString("get altitude frame  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "change_alt_frame", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_distance_NE", detail: "returns -> Vector2f_ud", documentation: new vscode.MarkdownString("@param loc Location_ud  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_distance_NED", detail: "returns -> Vector3f_ud", documentation: new vscode.MarkdownString("@param loc Location_ud  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_bearing", detail: "returns -> number", documentation: new vscode.MarkdownString("@param loc Location_ud  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_vector_from_origin_NEU", detail: "returns -> Vector3f_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "offset_bearing", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param distance number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "offset_bearing_and_pitch", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param distance number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "offset", detail: "returns -> nothing", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_distance", detail: "returns -> number", documentation: new vscode.MarkdownString("@param loc Location_ud  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.AP_EFI_Backend_ud_autocomplete = [
    { name: "handle_scripting", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param state EFI_State_ud  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.ScriptingCANBuffer_ud_autocomplete = [
    { name: "read_frame", detail: "returns -> CANFrame_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "write_frame", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param frame CANFrame_ud  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.AP_HAL__AnalogSource_ud_autocomplete = [
    { name: "voltage_average_ratiometric", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "voltage_latest", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "voltage_average", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_pin", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.AP_HAL__I2CDevice_ud_autocomplete = [
    { name: "set_address", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param address integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "read_registers", detail: "returns -> integer", documentation: new vscode.MarkdownString("If no read length is provided a single register will be read and returned.  \nIf read length is provided a table of register values are returned.  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "write_register", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param value integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set_retries", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param retries integer  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.AP_HAL__UARTDriver_ud_autocomplete = [
    { name: "set_flow_control", detail: "returns -> nothing", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "available", detail: "returns -> uint32_t_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "write", detail: "returns -> uint32_t_ud", documentation: new vscode.MarkdownString("@param value integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "read", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "begin", detail: "returns -> nothing", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.RC_Channel_ud_autocomplete = [
    { name: "norm_input_ignore_trim", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_override", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param PWM integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_aux_switch_pos", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "norm_input", detail: "returns -> number", documentation: new vscode.MarkdownString("desc return input on a channel from -1 to 1, centered on the trim. Ignores the deadzone  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "norm_input_dz", detail: "returns -> number", documentation: new vscode.MarkdownString("desc return input on a channel from -1 to 1, centered on the trim. Returns zero when within deadzone of the trim  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.winch_autocomplete = [
    { name: "get_rate_max", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_desired_rate", detail: "returns -> nothing", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "release_length", detail: "returns -> nothing", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "relax", detail: "returns -> nothing", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "healthy", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.mount_autocomplete = [
    { name: "set_attitude_euler", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_location_target", detail: "returns -> Location_ud", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_angle_target", detail: "returns -> numbernumbernumberboolean", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_rate_target", detail: "returns -> numbernumbernumberboolean", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set_roi_target", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set_rate_target", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set_angle_target", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set_mode", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param instance integer  \n@param mode integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_mode", detail: "returns -> integer", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_attitude_euler", detail: "returns -> numbernumbernumber", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.motors_autocomplete = [
    { name: "set_frame_string", detail: "returns -> nothing", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.FWVersion_autocomplete = [
    { name: "hash", detail: "returns -> string", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "patch", detail: "returns -> integer", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "minor", detail: "returns -> integer", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "major", detail: "returns -> integer", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "type", detail: "returns -> integer", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "string", detail: "returns -> string", documentation: new vscode.MarkdownString("get field  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.periph_autocomplete = [
    { name: "get_vehicle_state", detail: "returns -> uint32_t_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_yaw_earth", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "can_printf", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param text string  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.ins_autocomplete = [
    { name: "get_temperature", detail: "returns -> number", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.Motors_dynamic_autocomplete = [
    { name: "load_factors", detail: "returns -> nothing", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "add_motor", detail: "returns -> nothing", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "init", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.analog_autocomplete = [
    { name: "channel", detail: "returns -> AP_HAL__AnalogSource_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.gpio_autocomplete = [
    { name: "pinMode", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set GPIO pin mode  \n@param mode integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "toggle", detail: "returns -> nothing", documentation: new vscode.MarkdownString("toggle GPIO output  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "write", detail: "returns -> nothing", documentation: new vscode.MarkdownString("write GPIO output  \n@param value integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "read", detail: "returns -> boolean", documentation: new vscode.MarkdownString("read GPIO input  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.Motors_6DoF_autocomplete = [
    { name: "add_motor", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param reversible boolean  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "init", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.attitude_control_autocomplete = [
    { name: "set_offset_roll_pitch", detail: "returns -> nothing", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_forward_enable", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param bool boolean  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set_lateral_enable", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param bool boolean  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.frsky_sport_autocomplete = [
    { name: "prep_number", detail: "returns -> integer", documentation: new vscode.MarkdownString("@param number integer  \n@param digits integer  \n@param power integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "sport_telemetry_push", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param sensor integer  \n@param frame integer  \n@param appid integer  \n@param data integer  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.MotorsMatrix_autocomplete = [
    { name: "set_throttle_factor", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "add_motor_raw", detail: "returns -> nothing", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "init", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.quadplane_autocomplete = [
    { name: "in_assisted_flight", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "in_vtol_mode", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.LED_autocomplete = [
    { name: "get_rgb", detail: "returns -> integerintegerinteger", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.button_autocomplete = [
    { name: "get_button_state", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.RPM_autocomplete = [
    { name: "get_rpm", detail: "returns -> number", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.mission_autocomplete = [
    { name: "clear", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_item", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param index integer  \n@param item mavlink_mission_item_int_t_ud  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_item", detail: "returns -> mavlink_mission_item_int_t_ud", documentation: new vscode.MarkdownString("@param index integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "num_commands", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_current_do_cmd_id", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_current_nav_id", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_prev_nav_cmd_id", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_current_cmd", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param index integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_current_nav_index", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "state", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "cmd_has_location", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param cmd integer  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.param_autocomplete = [
    { name: "set_and_save", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param name string  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param name string  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get", detail: "returns -> number", documentation: new vscode.MarkdownString("@param name string  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set_default", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param name string  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "add_table", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param prefix string  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "add_param", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param name string  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.esc_telem_autocomplete = [
    { name: "get_usage_seconds", detail: "returns -> uint32_t_ud", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_consumption_mah", detail: "returns -> number", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_voltage", detail: "returns -> number", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_current", detail: "returns -> number", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_motor_temperature", detail: "returns -> integer", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_temperature", detail: "returns -> integer", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_rpm", detail: "returns -> number", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "update_rpm", detail: "returns -> nothing", documentation: new vscode.MarkdownString("update RPM for an ESC  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set_rpm_scale", detail: "returns -> nothing", documentation: new vscode.MarkdownString("set scale factor for RPM on a motor  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.optical_flow_autocomplete = [
    { name: "quality", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "healthy", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "enabled", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.baro_autocomplete = [
    { name: "get_external_temperature", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_temperature", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_pressure", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.serial_autocomplete = [
    { name: "find_serial", detail: "returns -> AP_HAL__UARTDriver_ud", documentation: new vscode.MarkdownString("Returns the UART instance that allows connections from scripts (those with SERIALx_PROTOCOL = 28`).  \nFor instance = 0, returns first such UART, second for instance = 1, and so on.  \nIf such an instance is not found, returns nil.  \n@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.rc_autocomplete = [
    { name: "get_channel", detail: "returns -> RC_Channel_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "has_valid_input", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_aux_cached", detail: "returns -> integer", documentation: new vscode.MarkdownString("return cached level of aux function  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "run_aux_function", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "find_channel_for_option", detail: "returns -> RC_Channel_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_pwm", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.SRV_Channels_autocomplete = [
    { name: "set_range", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param range integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set_angle", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param angle integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set_output_norm", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_output_scaled", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_output_pwm", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_output_scaled", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set_output_pwm_chan_timeout", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param chan integer  \n@param pwm integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set_output_pwm_chan", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param chan integer  \n@param pwm integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set_output_pwm", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param pwm integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "find_channel", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.serialLED_autocomplete = [
    { name: "send", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param chan integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set_RGB", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param chan integer  \n@param red integer  \n@param green integer  \n@param blue integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set_num_profiled", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param chan integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set_num_neopixel", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param chan integer  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.vehicle_autocomplete = [
    { name: "has_ekf_failsafed", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_pan_tilt_norm", detail: "returns -> numbernumber", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_wp_crosstrack_error_m", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_wp_bearing_deg", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_wp_distance_m", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_steering_and_throttle", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param steering number  \n@param throttle number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set_circle_rate", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_circle_radius", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_target_angle_and_climbrate", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_target_velocity_NED", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_target_velaccel_NED", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_target_posvelaccel_NED", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_target_posvel_NED", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_target_pos_NED", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "update_target_location", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_target_location", detail: "returns -> Location_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_target_location", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "start_takeoff", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param alt number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_control_output", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_time_flying_ms", detail: "returns -> uint32_t_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_likely_flying", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_control_mode_reason", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_mode", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_mode", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_velocity_match", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "nav_scripting_enable", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_desired_speed", detail: "returns -> boolean", documentation: new vscode.MarkdownString("desc sets autopilot nav speed (Copter and Rover)  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set_desired_turn_rate_and_speed", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_target_throttle_rate_rpy", detail: "returns -> nothing", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "nav_script_time_done", detail: "returns -> nothing", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "nav_script_time", detail: "returns -> integerintegernumbernumber", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.onvif_autocomplete = [
    { name: "get_pan_tilt_limit_max", detail: "returns -> Vector2f_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_pan_tilt_limit_min", detail: "returns -> Vector2f_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_absolutemove", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param pan number  \n@param tilt number  \n@param zoom number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "start", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param username string  \n@param password string  \n@param httphostname string  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.gcs_autocomplete = [
    { name: "send_named_float", detail: "returns -> nothing", documentation: new vscode.MarkdownString("send named float value using NAMED_VALUE_FLOAT message  \n@param name string  \n@param value number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set_message_interval", detail: "returns -> integer", documentation: new vscode.MarkdownString("set message interval for a given serial port and message id  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "send_text", detail: "returns -> nothing", documentation: new vscode.MarkdownString("send text with severity level  \n@param severity integer  \n@param text string  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.relay_autocomplete = [
    { name: "toggle", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "enabled", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get", detail: "returns -> integer", documentation: new vscode.MarkdownString("return state of a relay  \n@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "off", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "on", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.terrain_autocomplete = [
    { name: "height_above_terrain", detail: "returns -> number", documentation: new vscode.MarkdownString("@param extrapolate boolean  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "height_terrain_difference_home", detail: "returns -> number", documentation: new vscode.MarkdownString("@param extrapolate boolean  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "height_amsl", detail: "returns -> number", documentation: new vscode.MarkdownString("@param loc Location_ud  \n@param corrected boolean  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "status", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "enabled", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.rangefinder_autocomplete = [
    { name: "get_pos_offset_orient", detail: "returns -> Vector3f_ud", documentation: new vscode.MarkdownString("@param orientation integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "has_data_orient", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param orientation integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "status_orient", detail: "returns -> integer", documentation: new vscode.MarkdownString("@param orientation integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "ground_clearance_cm_orient", detail: "returns -> integer", documentation: new vscode.MarkdownString("@param orientation integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "min_distance_cm_orient", detail: "returns -> integer", documentation: new vscode.MarkdownString("@param orientation integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "max_distance_cm_orient", detail: "returns -> integer", documentation: new vscode.MarkdownString("@param orientation integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "distance_cm_orient", detail: "returns -> integer", documentation: new vscode.MarkdownString("@param orientation integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "has_orientation", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param orientation integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "num_sensors", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.proximity_autocomplete = [
    { name: "get_object_angle_and_distance", detail: "returns -> numbernumber", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_closest_object", detail: "returns -> numbernumber", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_object_count", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "num_sensors", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_status", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.notify_autocomplete = [
    { name: "handle_rgb_id", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param red integer  \n@param green integer  \n@param blue integer  \n@param id integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "handle_rgb", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param red integer  \n@param green integer  \n@param blue integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "play_tune", detail: "returns -> nothing", documentation: new vscode.MarkdownString("@param tune string  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.gps_autocomplete = [
    { name: "first_unconfigured_gps", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_antenna_offset", detail: "returns -> Vector3f_ud", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "have_vertical_velocity", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "last_message_time_ms", detail: "returns -> uint32_t_ud", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "last_fix_time_ms", detail: "returns -> uint32_t_ud", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_vdop", detail: "returns -> integer", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_hdop", detail: "returns -> integer", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "time_week_ms", detail: "returns -> uint32_t_ud", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "time_week", detail: "returns -> integer", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "num_sats", detail: "returns -> integer", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "ground_course", detail: "returns -> number", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "ground_speed", detail: "returns -> number", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "velocity", detail: "returns -> Vector3f_ud", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "vertical_accuracy", detail: "returns -> number", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "horizontal_accuracy", detail: "returns -> number", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "speed_accuracy", detail: "returns -> number", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "location", detail: "returns -> Location_ud", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "status", detail: "returns -> integer", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "primary_sensor", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "num_sensors", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.battery_autocomplete = [
    { name: "reset_remaining", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param instance integer  \n@param percentage number  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_cycle_count", detail: "returns -> integer", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_temperature", detail: "returns -> number", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "overpower_detected", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "has_failsafed", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "pack_capacity_mah", detail: "returns -> integer", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "capacity_remaining_pct", detail: "returns -> integer", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "consumed_wh", detail: "returns -> number", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "consumed_mah", detail: "returns -> number", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "current_amps", detail: "returns -> number", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "voltage_resting_estimate", detail: "returns -> number", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "voltage", detail: "returns -> number", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "healthy", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param instance integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "num_instances", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.arming_autocomplete = [
    { name: "set_aux_auth_failed", detail: "returns -> nothing", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_aux_auth_passed", detail: "returns -> nothing", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_aux_auth_id", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "arm", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "is_armed", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "pre_arm_checks", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "disarm", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.ahrs_autocomplete = [
    { name: "get_quaternion", detail: "returns -> Quaternion_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_posvelyaw_source_set", detail: "returns -> integer", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "initialised", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_origin", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param loc Location_ud  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_origin", detail: "returns -> Location_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "set_home", detail: "returns -> boolean", documentation: new vscode.MarkdownString("@param loc Location_ud  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_vel_innovations_and_variances_for_source", detail: "returns -> Vector3f_udVector3f_ud", documentation: new vscode.MarkdownString("@param source integer  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "set_posvelyaw_source_set", detail: "returns -> nothing", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_variances", detail: "returns -> numbernumbernumberVector3f_udnumber", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_EAS2TAS", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "body_to_earth", detail: "returns -> Vector3f_ud", documentation: new vscode.MarkdownString("@param vector Vector3f_ud  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "earth_to_body", detail: "returns -> Vector3f_ud", documentation: new vscode.MarkdownString("@param vector Vector3f_ud  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_vibration", detail: "returns -> Vector3f_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "airspeed_estimate", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "healthy", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "home_is_set", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_relative_position_D_home", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_relative_position_NED_origin", detail: "returns -> Vector3f_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_relative_position_NED_home", detail: "returns -> Vector3f_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_velocity_NED", detail: "returns -> Vector3f_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "groundspeed_vector", detail: "returns -> Vector2f_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "wind_estimate", detail: "returns -> Vector3f_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_hagl", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_accel", detail: "returns -> Vector3f_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_gyro", detail: "returns -> Vector3f_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_home", detail: "returns -> Location_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_location", detail: "returns -> Location_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_position", detail: "returns -> Location_ud", documentation: new vscode.MarkdownString("same as `get_location` will be removed  \n"), kind: vscode.CompletionItemKind.Method },
    { name: "get_yaw", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_pitch", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_roll", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.AC_AttitudeControl_autocomplete = [
    { name: "get_rpy_srate", detail: "returns -> numbernumbernumber", documentation: new vscode.MarkdownString("return slew rates for VTOL controller  \n"), kind: vscode.CompletionItemKind.Method },
];
exports.follow_autocomplete = [
    { name: "get_target_heading_deg", detail: "returns -> number", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_target_location_and_velocity_ofs", detail: "returns -> Location_udVector3f_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_target_location_and_velocity", detail: "returns -> Location_udVector3f_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "get_last_update_ms", detail: "returns -> uint32_t_ud", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
    { name: "have_target", detail: "returns -> boolean", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];
exports.scripting_autocomplete = [
    { name: "restart_all", detail: "returns -> nothing", documentation: new vscode.MarkdownString(""), kind: vscode.CompletionItemKind.Method },
];


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __webpack_require__(1);
const ns = __webpack_require__(2);
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "lua-autocomplete-for-ardupilot" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('lua-autocomplete-for-ardupilot.helloWorld', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World from Lua Autocomplete for Ardupilot!');
    });
    let hoverdisposable = vscode.languages.registerHoverProvider('lua', {
        provideHover(document, position, token) {
            const range = document.getWordRangeAtPosition(position);
            const word = document.getText(range);
            console.log("hello");
            if (word == "mission") {
                return new vscode.Hover({
                    language: "Hello language",
                    value: "Hello Value"
                });
            }
        }
    });
    context.subscriptions.push(disposable);
    context.subscriptions.push(hoverdisposable);
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('lua', {
        provideCompletionItems(document, position, token, context) {
            const prefix = document.lineAt(position).text.substring(0, position.character);
            let autoset = [];
            if (prefix.endsWith("uint32_t_ud:")) {
                autoset = ns.uint32_t_ud_autocomplete;
            }
            else if (prefix.endsWith("logger:")) {
                autoset = ns.logger_autocomplete;
            }
            else if (prefix.endsWith("i2c:")) {
                autoset = ns.i2c_autocomplete;
            }
            else if (prefix.endsWith("EFI_State_ud:")) {
                autoset = ns.EFI_State_ud_autocomplete;
            }
            else if (prefix.endsWith("Cylinder_Status_ud:")) {
                autoset = ns.Cylinder_Status_ud_autocomplete;
            }
            else if (prefix.endsWith("efi:")) {
                autoset = ns.efi_autocomplete;
            }
            else if (prefix.endsWith("CAN:")) {
                autoset = ns.CAN_autocomplete;
            }
            else if (prefix.endsWith("CANFrame_ud:")) {
                autoset = ns.CANFrame_ud_autocomplete;
            }
            else if (prefix.endsWith("motor_factor_table_ud:")) {
                autoset = ns.motor_factor_table_ud_autocomplete;
            }
            else if (prefix.endsWith("PWMSource_ud:")) {
                autoset = ns.PWMSource_ud_autocomplete;
            }
            else if (prefix.endsWith("mavlink_mission_item_int_t_ud:")) {
                autoset = ns.mavlink_mission_item_int_t_ud_autocomplete;
            }
            else if (prefix.endsWith("Parameter_ud:")) {
                autoset = ns.Parameter_ud_autocomplete;
            }
            else if (prefix.endsWith("Vector2f_ud:")) {
                autoset = ns.Vector2f_ud_autocomplete;
            }
            else if (prefix.endsWith("Vector3f_ud:")) {
                autoset = ns.Vector3f_ud_autocomplete;
            }
            else if (prefix.endsWith("Quaternion_ud:")) {
                autoset = ns.Quaternion_ud_autocomplete;
            }
            else if (prefix.endsWith("Location_ud:")) {
                autoset = ns.Location_ud_autocomplete;
            }
            else if (prefix.endsWith("AP_EFI_Backend_ud:")) {
                autoset = ns.AP_EFI_Backend_ud_autocomplete;
            }
            else if (prefix.endsWith("ScriptingCANBuffer_ud:")) {
                autoset = ns.ScriptingCANBuffer_ud_autocomplete;
            }
            else if (prefix.endsWith("AP_HAL__AnalogSource_ud:")) {
                autoset = ns.AP_HAL__AnalogSource_ud_autocomplete;
            }
            else if (prefix.endsWith("AP_HAL__I2CDevice_ud:")) {
                autoset = ns.AP_HAL__I2CDevice_ud_autocomplete;
            }
            else if (prefix.endsWith("AP_HAL__UARTDriver_ud:")) {
                autoset = ns.AP_HAL__UARTDriver_ud_autocomplete;
            }
            else if (prefix.endsWith("RC_Channel_ud:")) {
                autoset = ns.RC_Channel_ud_autocomplete;
            }
            else if (prefix.endsWith("winch:")) {
                autoset = ns.winch_autocomplete;
            }
            else if (prefix.endsWith("mount:")) {
                autoset = ns.mount_autocomplete;
            }
            else if (prefix.endsWith("motors:")) {
                autoset = ns.motors_autocomplete;
            }
            else if (prefix.endsWith("FWVersion:")) {
                autoset = ns.FWVersion_autocomplete;
            }
            else if (prefix.endsWith("periph:")) {
                autoset = ns.periph_autocomplete;
            }
            else if (prefix.endsWith("ins:")) {
                autoset = ns.ins_autocomplete;
            }
            else if (prefix.endsWith("Motors_dynamic:")) {
                autoset = ns.Motors_dynamic_autocomplete;
            }
            else if (prefix.endsWith("analog:")) {
                autoset = ns.analog_autocomplete;
            }
            else if (prefix.endsWith("gpio:")) {
                autoset = ns.gpio_autocomplete;
            }
            else if (prefix.endsWith("Motors_6DoF:")) {
                autoset = ns.Motors_6DoF_autocomplete;
            }
            else if (prefix.endsWith("attitude_control:")) {
                autoset = ns.attitude_control_autocomplete;
            }
            else if (prefix.endsWith("frsky_sport:")) {
                autoset = ns.frsky_sport_autocomplete;
            }
            else if (prefix.endsWith("MotorsMatrix:")) {
                autoset = ns.MotorsMatrix_autocomplete;
            }
            else if (prefix.endsWith("quadplane:")) {
                autoset = ns.quadplane_autocomplete;
            }
            else if (prefix.endsWith("LED:")) {
                autoset = ns.LED_autocomplete;
            }
            else if (prefix.endsWith("button:")) {
                autoset = ns.button_autocomplete;
            }
            else if (prefix.endsWith("RPM:")) {
                autoset = ns.RPM_autocomplete;
            }
            else if (prefix.endsWith("mission:")) {
                autoset = ns.mission_autocomplete;
            }
            else if (prefix.endsWith("param:")) {
                autoset = ns.param_autocomplete;
            }
            else if (prefix.endsWith("esc_telem:")) {
                autoset = ns.esc_telem_autocomplete;
            }
            else if (prefix.endsWith("optical_flow:")) {
                autoset = ns.optical_flow_autocomplete;
            }
            else if (prefix.endsWith("baro:")) {
                autoset = ns.baro_autocomplete;
            }
            else if (prefix.endsWith("serial:")) {
                autoset = ns.serial_autocomplete;
            }
            else if (prefix.endsWith("rc:")) {
                autoset = ns.rc_autocomplete;
            }
            else if (prefix.endsWith("SRV_Channels:")) {
                autoset = ns.SRV_Channels_autocomplete;
            }
            else if (prefix.endsWith("serialLED:")) {
                autoset = ns.serialLED_autocomplete;
            }
            else if (prefix.endsWith("vehicle:")) {
                autoset = ns.vehicle_autocomplete;
            }
            else if (prefix.endsWith("onvif:")) {
                autoset = ns.onvif_autocomplete;
            }
            else if (prefix.endsWith("gcs:")) {
                autoset = ns.gcs_autocomplete;
            }
            else if (prefix.endsWith("relay:")) {
                autoset = ns.relay_autocomplete;
            }
            else if (prefix.endsWith("terrain:")) {
                autoset = ns.terrain_autocomplete;
            }
            else if (prefix.endsWith("rangefinder:")) {
                autoset = ns.rangefinder_autocomplete;
            }
            else if (prefix.endsWith("proximity:")) {
                autoset = ns.proximity_autocomplete;
            }
            else if (prefix.endsWith("notify:")) {
                autoset = ns.notify_autocomplete;
            }
            else if (prefix.endsWith("gps:")) {
                autoset = ns.gps_autocomplete;
            }
            else if (prefix.endsWith("battery:")) {
                autoset = ns.battery_autocomplete;
            }
            else if (prefix.endsWith("arming:")) {
                autoset = ns.arming_autocomplete;
            }
            else if (prefix.endsWith("ahrs:")) {
                autoset = ns.ahrs_autocomplete;
            }
            else if (prefix.endsWith("AC_AttitudeControl:")) {
                autoset = ns.AC_AttitudeControl_autocomplete;
            }
            else if (prefix.endsWith("follow:")) {
                autoset = ns.follow_autocomplete;
            }
            else if (prefix.endsWith("scripting:")) {
                autoset = ns.scripting_autocomplete;
            }
            let items = [];
            for (const method of autoset) {
                const item = new vscode.CompletionItem(method.name, method.kind);
                item.detail = method.detail;
                item.documentation = method.documentation;
                items.push(item);
            }
            return items;
        },
    }, ":" // trigger
    ));
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map