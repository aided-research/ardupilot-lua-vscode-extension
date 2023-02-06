// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as ns from './namespaces';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    context.subscriptions.push(
        vscode.languages.registerCompletionItemProvider('lua',  {
            provideCompletionItems(document, position, token, context) {

                const prefix = document.lineAt(position).text.substring(0, position.character);

                let autoset: ns.AutoComplete[] = []

                if (prefix.endsWith("uint32_t_ud:")) {
                    autoset = ns.uint32_t_ud_autocomplete
                }
                else if (prefix.endsWith("logger:")) {
                    autoset = ns.logger_autocomplete
                }
                else if (prefix.endsWith("i2c:")) {
                    autoset = ns.i2c_autocomplete
                }
                else if (prefix.endsWith("EFI_State_ud:")) {
                    autoset = ns.EFI_State_ud_autocomplete
                }
                else if (prefix.endsWith("Cylinder_Status_ud:")) {
                    autoset = ns.Cylinder_Status_ud_autocomplete
                }
                else if (prefix.endsWith("efi:")) {
                    autoset = ns.efi_autocomplete
                }
                else if (prefix.endsWith("CAN:")) {
                    autoset = ns.CAN_autocomplete
                }
                else if (prefix.endsWith("CANFrame_ud:")) {
                    autoset = ns.CANFrame_ud_autocomplete
                }
                else if (prefix.endsWith("motor_factor_table_ud:")) {
                    autoset = ns.motor_factor_table_ud_autocomplete
                }
                else if (prefix.endsWith("PWMSource_ud:")) {
                    autoset = ns.PWMSource_ud_autocomplete
                }
                else if (prefix.endsWith("mavlink_mission_item_int_t_ud:")) {
                    autoset = ns.mavlink_mission_item_int_t_ud_autocomplete
                }
                else if (prefix.endsWith("Parameter_ud:")) {
                    autoset = ns.Parameter_ud_autocomplete
                }
                else if (prefix.endsWith("Vector2f_ud:")) {
                    autoset = ns.Vector2f_ud_autocomplete
                }
                else if (prefix.endsWith("Vector3f_ud:")) {
                    autoset = ns.Vector3f_ud_autocomplete
                }
                else if (prefix.endsWith("Quaternion_ud:")) {
                    autoset = ns.Quaternion_ud_autocomplete
                }
                else if (prefix.endsWith("Location_ud:")) {
                    autoset = ns.Location_ud_autocomplete
                }
                else if (prefix.endsWith("AP_EFI_Backend_ud:")) {
                    autoset = ns.AP_EFI_Backend_ud_autocomplete
                }
                else if (prefix.endsWith("ScriptingCANBuffer_ud:")) {
                    autoset = ns.ScriptingCANBuffer_ud_autocomplete
                }
                else if (prefix.endsWith("AP_HAL__AnalogSource_ud:")) {
                    autoset = ns.AP_HAL__AnalogSource_ud_autocomplete
                }
                else if (prefix.endsWith("AP_HAL__I2CDevice_ud:")) {
                    autoset = ns.AP_HAL__I2CDevice_ud_autocomplete
                }
                else if (prefix.endsWith("AP_HAL__UARTDriver_ud:")) {
                    autoset = ns.AP_HAL__UARTDriver_ud_autocomplete
                }
                else if (prefix.endsWith("RC_Channel_ud:")) {
                    autoset = ns.RC_Channel_ud_autocomplete
                }
                else if (prefix.endsWith("winch:")) {
                    autoset = ns.winch_autocomplete
                }
                else if (prefix.endsWith("mount:")) {
                    autoset = ns.mount_autocomplete
                }
                else if (prefix.endsWith("motors:")) {
                    autoset = ns.motors_autocomplete
                }
                else if (prefix.endsWith("FWVersion:")) {
                    autoset = ns.FWVersion_autocomplete
                }
                else if (prefix.endsWith("periph:")) {
                    autoset = ns.periph_autocomplete
                }
                else if (prefix.endsWith("ins:")) {
                    autoset = ns.ins_autocomplete
                }
                else if (prefix.endsWith("Motors_dynamic:")) {
                    autoset = ns.Motors_dynamic_autocomplete
                }
                else if (prefix.endsWith("analog:")) {
                    autoset = ns.analog_autocomplete
                }
                else if (prefix.endsWith("gpio:")) {
                    autoset = ns.gpio_autocomplete
                }
                else if (prefix.endsWith("Motors_6DoF:")) {
                    autoset = ns.Motors_6DoF_autocomplete
                }
                else if (prefix.endsWith("attitude_control:")) {
                    autoset = ns.attitude_control_autocomplete
                }
                else if (prefix.endsWith("frsky_sport:")) {
                    autoset = ns.frsky_sport_autocomplete
                }
                else if (prefix.endsWith("MotorsMatrix:")) {
                    autoset = ns.MotorsMatrix_autocomplete
                }
                else if (prefix.endsWith("quadplane:")) {
                    autoset = ns.quadplane_autocomplete
                }
                else if (prefix.endsWith("LED:")) {
                    autoset = ns.LED_autocomplete
                }
                else if (prefix.endsWith("button:")) {
                    autoset = ns.button_autocomplete
                }
                else if (prefix.endsWith("RPM:")) {
                    autoset = ns.RPM_autocomplete
                }
                else if (prefix.endsWith("mission:")) {
                    autoset = ns.mission_autocomplete
                }
                else if (prefix.endsWith("param:")) {
                    autoset = ns.param_autocomplete
                }
                else if (prefix.endsWith("esc_telem:")) {
                    autoset = ns.esc_telem_autocomplete
                }
                else if (prefix.endsWith("optical_flow:")) {
                    autoset = ns.optical_flow_autocomplete
                }
                else if (prefix.endsWith("baro:")) {
                    autoset = ns.baro_autocomplete
                }
                else if (prefix.endsWith("serial:")) {
                    autoset = ns.serial_autocomplete
                }
                else if (prefix.endsWith("rc:")) {
                    autoset = ns.rc_autocomplete
                }
                else if (prefix.endsWith("SRV_Channels:")) {
                    autoset = ns.SRV_Channels_autocomplete
                }
                else if (prefix.endsWith("serialLED:")) {
                    autoset = ns.serialLED_autocomplete
                }
                else if (prefix.endsWith("vehicle:")) {
                    autoset = ns.vehicle_autocomplete
                }
                else if (prefix.endsWith("onvif:")) {
                    autoset = ns.onvif_autocomplete
                }
                else if (prefix.endsWith("gcs:")) {
                    autoset = ns.gcs_autocomplete
                }
                else if (prefix.endsWith("relay:")) {
                    autoset = ns.relay_autocomplete
                }
                else if (prefix.endsWith("terrain:")) {
                    autoset = ns.terrain_autocomplete
                }
                else if (prefix.endsWith("rangefinder:")) {
                    autoset = ns.rangefinder_autocomplete
                }
                else if (prefix.endsWith("proximity:")) {
                    autoset = ns.proximity_autocomplete
                }
                else if (prefix.endsWith("notify:")) {
                    autoset = ns.notify_autocomplete
                }
                else if (prefix.endsWith("gps:")) {
                    autoset = ns.gps_autocomplete
                }
                else if (prefix.endsWith("battery:")) {
                    autoset = ns.battery_autocomplete
                }
                else if (prefix.endsWith("arming:")) {
                    autoset = ns.arming_autocomplete
                }
                else if (prefix.endsWith("ahrs:")) {
                    autoset = ns.ahrs_autocomplete
                }
                else if (prefix.endsWith("AC_AttitudeControl:")) {
                    autoset = ns.AC_AttitudeControl_autocomplete
                }
                else if (prefix.endsWith("follow:")) {
                    autoset = ns.follow_autocomplete
                }
                else if (prefix.endsWith("scripting:")) {
                    autoset = ns.scripting_autocomplete
                }
                

                let items = []
                for (const method of autoset) {
                    const item = new vscode.CompletionItem(method.name, method.kind)
                    item.detail = method.detail
                    item.documentation = method.documentation
                    items.push(item)
                }
                return items
            },
        },
        ":" // trigger
        )
    )
}

// This method is called when your extension is deactivated
export function deactivate() {}
