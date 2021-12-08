


//% color="#0099CC" iconWidth=30 iconHeight=20
namespace pinpong_huskylens{
    //% block="初始化[cobotType]端口[port]波特率[BaudRate]" blockType="command"
    //% cobotType.shadow="dropdown" cobotType.options="cobotType"
    //% port.shadow="string" port.defl="/dev/ttyAMA0"
    //% BaudRate.shadow="dropdown" BaudRate.options="BaudRate"
    export function init(parameter:any,block:any){
        let initVal1 = parameter.cobotType.code,
        initVal2 = parameter.port.code,
        initVal3 = parameter.BaudRate.code;
        Generator.addCode(`mc = ${initVal1}(${initVal2},${initVal3})`)
        if(initVal1 == "MyCobot") Generator.addImport('from pymycobot.mycobot import MyCobot')
        else if(initVal1 == "MyPalletizer") Generator.addImport('from pymycobot.mypalletizer import MyPalletizer')
    }

    //% block="---"
    export function noteSep(){}

    //% block="设置底部[num3]号引脚输出[mode4]" blockType="command"
    //% num3.shadow="number" num3.defl="0"
    //% mode4.shadow="dropdown" mode4.options="mode4"
    export function set_basic_output(parameter:any,block:any){
        let number = parameter.num3.code,
        mode = parameter.mode4.code;

        Generator.addCode(`mc.set_basic_output(${number},${mode})`)
    }

    //% block="获取底部[num4]号引脚输入" blockType="reporter"
    //% num4.shadow="number" num4.defl="0"
    export function get_basic_input(parameter:any,block:any){
        let number = parameter.num4.code;

        Generator.addCode(`mc.get_basic_input(${number})`)
    }

    //% block="---"
    export function noteSep1(){}

    //% block="设置颜色，红[rValue]绿[gValue]蓝[bValue]" blockType="command"
    //% rValue.shadow="number" rValue.defl="0"
    //% gValue.shadow="number" gValue.defl="0"
    //% bValue.shadow="number" bValue.defl="0"
    export function setRgb(parameter:any,block:any){
        let val1 = parameter.rValue.code,
        val2 = parameter.gValue.code,
        val3 = parameter.bValue.code;
        Generator.addCode(`mc.set_color(${val1},${val2},${val3})`)
    }

    //% block="设置pwm输出值[pwmValue_1]值[pwmValue_2]值[pwmValue_3]" blockType="command"
    //% pwmValue_1.shadow="number" pwmValue_1.defl="0"
    //% pwmValue_2.shadow="number" pwmValue_2.defl="0"
    //% pwmVaule_3.shadow="number" pwmValue_3.defl="0"
    export function setPwmOutPut(parameter:any,block:any){
        let val1 = parameter.pwmValue_1.code,
        val2 = parameter.pwmValue_2.code,
        val3 = parameter.pwmValue_3.code;
        Generator.addCode(`mc.set_pwm_output(${val1},${val2},${val3})`)
    }

    //% block="设置pin模式，值[pinValue_1]模式[pinMode_1]" blockType="command"
    //% pinValue_1.shadow="number" pinValue.defl="0"
    //% pinMode_1.shadow="dropdown" pinMode_1.options="pinMode_1"
    export function setPinMode(parameter:any,block:any){
        let val1 = parameter.pinValue_1.code,
        mode = parameter.pinMode_1.code;
        Generator.addCode(`mc.set_pin_mode(${val1},${mode})`)
    }
    //% block="设置IO值[IOValue_2]值[IOMode_2]" blockType="command"
    //% IOValue_2.shadow="number" IOValue_2.defl="0"
    //% IOMode_2.shadow="dropdown" IOMode_2.options="IOMode_2"
    export function setIoValue(parameter:any,block:any){
        let val1 = parameter.IOValue_2.code,
        mode = parameter.IOMode_2.code;
        Generator.addCode(`mc.set_digital_output(${val1},${mode})`)
    }
    //% block="读取IO值[IOValue2_1]" blockType="reporter"
    //% IOValue2_1.shadow="number" IOValue.defl="0"
    export function getIoValue(parameter:any,block:any){
        let val1 = parameter.IOValue2_1.code;
        Generator.addCode(`mc.get_digital_input(${val1})`)
    }

    //% block="---"
    export function noteSep2(){}

    //% block="上电" blockType="command"
    export function powerOn(parameter:any,block:any){
        Generator.addCode(`mc.power_on()`)
    }
    //% block="断电" blockType="command"
    export function powerOff(parameter:any,block:any){
        Generator.addCode(`mc.power_off()`)
    }
    //% block="是否上电" blockType="boolean"
    export function ifPowerOn(parameter:any,block:any){
        Generator.addCode(`mc.is_power_on()`)
    }
    //% block="释放所有关节" blockType="command"
    export function releaseAllServos(parameter:any,block:any){
        Generator.addCode(`mc.release_all_servos()`)
    }

    //% block="---"
    export function noteSep3(){}

    //% block="获取所有角度" blockType="reporter"
    export function getAngles(parameter:any,block:any){
        Generator.addCode(`mc.get_angles()`)
    }

    //% block="设置关节[num5]角度为[num6]速度为[num7]" blockly="command"
    //% num5.shadow="number" num5.defl="0"
    //% num6.shadow="number" num6.defl="0"
    //% num7.shadow="number" num7.defl="0"
    export function send_angle(parameter:any,block:any){
        let val1 = parameter.num5.code,
        val2 = parameter.num6.code,
        val3 = parameter.num7.code;
        Generator.addCode(`mc.send_angle(${val1},${val2},${val3})`)
    }

    //% block="设置全角度，关节1[jointValue1_1]关节2[jointValue1_2]关节3[jointValue1_3]关节4[jointValue1_4]关节5[jointValue1_5]关节6[jointValue1_6]速度[jointSpeed1_1]" blockType="command"
    //% jointValue1_1.shadow="number" jointValue1_1.defl="0"
    //% jointValue1_2.shadow="number" jointValue1_2.defl="0"
    //% jointValue1_3.shadow="number" jointValue1_3.defl="0"
    //% jointValue1_4.shadow="number" jointValue1_4.defl="0"
    //% jointValue1_5.shadow="number" jointValue1_5.defl="0"
    //% jointValue1_6.shadow="number" jointValue1_6.defl="0"
    //% jointSpeed1_1.shadow="number" jointSpeed1_1.defl="0"
    export function send_angles1(parameter:any,block:any){
        let val1 = parameter.jointValue1_1.code,
        val2 = parameter.jointValue1_2.code,
        val3 = parameter.jointValue1_3.code,
        val4 = parameter.jointValue1_4.code,
        val5 = parameter.jointValue1_5.code,
        val6 = parameter.jointValue1_6.code,
        spd = parameter.jointSpeed1_1.code;
        Generator.addCode(`mc.send_angles([${val1},${val2},${val3},${val4},${val5},${val6}],${spd})`)
    }

    //% block="设置全角度，关节1[jointValue2_1]关节2[jointValue2_2]关节3[jointValue2_3]关节4[jointValue2_4]速度[jointSpeed2_1]" blockType="command"
    //% jointValue2_1.shadow="number" jointValue2_1.defl="0"
    //% jointValue2_2.shadow="number" jointValue2_2.defl="0"
    //% jointValue2_3.shadow="number" jointValue2_3.defl="0"
    //% jointValue2_4.shadow="number" jointValue2_4.defl="0"
    //% jointSpeed2_1.shadow="number" jointSpeed2_1.defl="0"
    export function send_angles2(parameter:any,block:any){
        let val1 = parameter.jointValue2_1.code,
        val2 = parameter.jointValue2_2.code,
        val3 = parameter.jointValue2_3.code,
        val4 = parameter.jointValue2_4.code,
        spd = parameter.jointSpeed2_1.code;
        Generator.addCode(`mc.send_angles([${val1},${val2},${val3},${val4}],${spd})`)
    }

    //% block="设置全角度为[jointSlot1_1]速度[jointSpeed3_1]" blockType="command"
    //% jointSlot1_1.shadow="string" jointSlot1_1.defl="---" 
    //% jointSpeed3_1.shadow="number" jointSpeed3_1.defl="0"
    export function send_angles3(parameter:any,block:any){
        let val1 = parameter.jointSlot1_1.code,
        val2 = parameter.jointSpeed3_1.code;
        Generator.addCode(`mc.send_angles([${val1}],${val2})`)
    }

    //% block="获取所有坐标" blockType="reporter"
    export function getCoords(parameter:any,block:any){
        Generator.addCode(`mc.get_coords()`)
    }

    //% block="设置坐标X[jointValue4_1]Y[jointValue4_2]Z[jointValue4_3]Rx[jointValue4_4]Ry[jointValue4_5]Rz[jointValue4_6]速度[jointSpeed4_1]模式[jointMode1_1]" blockType="command"
    //% jointValue4_1.shadow="number" jointValue4_1.defl="0"
    //% jointValue4_2.shadow="number" jointValue4_2.defl="0"
    //% jointValue4_3.shadow="number" jointValue4_3.defl="0"
    //% jointValue4_4.shadow="number" jointValue4_4.defl="0"
    //% jointValue4_5.shadow="number" jointValue4_5.defl="0"
    //% jointValue4_6.shadow="number" jointValue4_6.defl="0"
    //% jointSpeed4_1.shadow="number" jointSpeed4_1.defl="0"
    //% jointMode1_1.shadow="dropdown"  jointMode1_1.options="jointMode1_1" jointMode1_1.defl="jointMode1_1.Angular"
    export function sendCoords1(parameter:any,block:any){
        let val1 = parameter.jointValue4_1.code,
        val2 = parameter.jointValue4_2.code,
        val3 = parameter.jointValue4_3.code,
        val4 = parameter.jointValue4_4.code,
        val5 = parameter.jointValue4_5.code,
        val6 = parameter.jointValue4_6.code,
        spd = parameter.jointSpeed4_1.code,
        mode = parameter.jointMode1_1.code;
        Generator.addCode(`mc.send_coords([${val1},${val2},${val3},${val4},${val5},${val6}],${spd},${mode})`)
    }

    //% block="设置坐标X[jointValue5_1]Y[jointValue5_2]Z[jointValue5_3]θ[jointValue5_4]速度[jointSpeed5_1]模式[jointMode2_1]" blockType="command"
    //% jointValue5_1.shadow="number" jointValue5_1.defl="0"
    //% jointValue5_2.shadow="number" jointValue5_2.defl="0"
    //% jointValue5_3.shadow="number" jointValue5_3.defl="0"
    //% jointValue5_4.shadow="number" jointValue5_4.defl="0"
    //% jointSpeed5_1.shadow="number" jointSpeed5_1.defl="0"
    //% jointMode2_1.shadow="dropdown"  jointMode2_1.options="jointMode2_1" jointMode2_1.defl="jointMode2_1.Angular"
    export function sendCoords2(parameter:any,block:any){
        let val1 = parameter.jointValue5_1.code,
        val2 = parameter.jointValue5_2.code,
        val3 = parameter.jointValue5_3.code,
        val4 = parameter.jointValue5_4.code,
        spd = parameter.jointSpeed5_1.code,
        mode = parameter.jointMode2_1.code;
        Generator.addCode(`mc.send_coords([${val1},${val2},${val3},${val4}],${spd},${mode})`)
    }

    //% block="设置全坐标[jointValue6_1]速度[jointSpeed6_1]模式[jointMode3_1]" blockType="command"
    //% jointValue6_1.shadow="string" jointValue6_1.defl="---"
    //% jointSpeed6_1.shadow="number" jointSpeed.defl="0"
    //% jointMode3_1.shadow="dropdown"  jointMode3_1.options="jointMode3_1" jointMode3_1.defl="jointMode3_1.Angular"
    export function sendCoords3(parameter:any,block:any){
        let val1 = parameter.jointValue6_1.code,
        spd = parameter.jointSpeed6_1.code,
        mode = parameter.jointMode3_1.code;
        Generator.addCode(`mc.send_coords(${val1},${spd},${mode})`)
    }
    
    //% block="[jointMode4_1]是否到达位置[jointValue7_1]" blockType="reporter"
    //% jointMode4_1.shadow="dropdown"  jointMode4_1.options="jointMode4_1" jointMode4_1.defl="jointMode4_1.Angular"
    //% jointValue7_1.shadow="string" jointValue7_1.defl="---"
    export function isInPosition(parameter:any,block:any){
        let val1 = parameter.jointValue7_1.code,
        mode = parameter.jointMode4_1.code;
        Generator.addCode(`mc.is_in_position(${val1},${mode})`)
    }

    //% block="---"
    export function noteSep4(){}

    //% block="点动控制关节[pointValue1_1]朝方向[pointValue1_2]运动,速度[pointValue1_3]" blockType="command"
    //% pointValue1_1.shadow="" pointValue1_1.defl="0"
    //% pointValue1_2.shadow="" pointValue1_2.defl="0"
    //% pointValue1_3.shadow="" pointValue1_3.defl="0"
    export function jogAngle(parameter:any,block:any){
        let val1 = parameter.pointValue1_1.code,
        val2 = parameter.pointValue1_2.code,
        val3 = parameter.pointValue1_3.code;
        Generator.addCode(`mc.jog_angle(${val1},${val2},${val3})`)
    }

    //% block="点动控制坐标[pointValue2_1]朝方向[pointValue2_2]运动,速度[pointValue2_3]" blockType="command"
    //% pointValue2_1.shadow="" pointValue2_1.defl="0"
    //% pointValue2_2.shadow="" pointValue2_2.defl="0"
    //% pointValue2_3.shadow="" pointValue2_3.defl="0"
    export function jogCoord(parameter:any,block:any){
        let val1 = parameter.pointValue2_1.code,
        val2 = parameter.pointValue2_2.code,
        val3 = parameter.pointValue2_3.code;
        Generator.addCode(`mc.jog_coord(${val1},${val2},${val3})`)
    }

    //% block="停止点动运动" blockType="command"
    export function jogStop(parameter:any,block:any){
        Generator.addCode(`mc.jog_stop()`)
    }

    //% block="设置电机[pointValue3_1]的编码器值为[pointValue3_2]" blockType="command"
    //% pointValue3_1.shadow="" pointValue3_1.defl="0"
    //% pointValue3_2.shadow="" pointValue3_2.defl="0"
    export function setEncoder(parameter:any,block:any){
        let val1 = parameter.pointValue3_1.code,
        val2 = parameter.pointValue3_2.code;
        Generator.addCode(`mc.set_encoder(${val1},${val2})`)
    }

    //% block="获取电机[pointValue4_1]的编码器值" blockType="reporter"
    //% pointValue4_1.shadow="" pointValue4_1.defl="0"
    export function getEncoder(parameter:any,block:any){
        let val1 = parameter.pointValue4_1.code;
        Generator.addCode(`mc.get_encoder(${val1})`)
    }

    //% block="暂停" blockType="command"
    export function pause(parameter:any,block:any){
        Generator.addCode(`mc.pause()`)
    }

    //% block="恢复" blockType="command"
    export function resume(parameter:any,block:any){
        Generator.addCode(`mc.resume()`)
    }

    //% block="停止" blockType="command"
    export function stop(parameter:any,block:any){
        Generator.addCode(`mc.stop()`)
    }

    //% block="是否已暂停" blockType="reporter"
    export function isPaused(parameter:any,block:any){
        Generator.addCode(`mc.is_paused()`)
    }

    //% block="---"
    export function noteSep5){}

    //% block="获取速度" blockType="reporter"
    export function getSpeed(parameter:any,block:any){
        Generator.addCode(`mc.get_speed()`)
    }

    //% block="设置速度为[settingValue1_1]" blockType="command"
    //% settingValue1_1.shadow="number" settingValue1_1.defl="0"
    export function setSpeed(parameter:any,block:any){
        let val1 = parameter.settingValue1_1.code;
        Generator.addCode(`mc.set_speed(${val1})`)
    }

    //% block="获取关节[settingValue2_1]的最小角度" blockType="reporter"
    //% settingValue2_1.shadow="number" settingValue2_1.defl="0"
    export function getJointMinAngle(parameter:any,block:any){
        let val1 = parameter.settingValue2_1.code;
        Generator.addCode(`mc.get_joint_min_angle(${val1})`)
    }

    //% block="获取关节[settingValue3_1]的最大角度" blockType="reporter"
    //% settingValue3_1.shadow="number" settingValue3_1.defl="0"
    export function getJointMaxAngle(parameter:any,block:any){
        let val1 = parameter.settingValue3_1.code;
        Generator.addCode(`mc.get_joint_max_angle(${val1})`)
    }

    //% block="---"
    export function noteSep6(){}

    //% block="释放伺服电机[motorValue1_1]" blockType="command"
    //% motorValue1_1.shadow="number" motorValue1_1.defl="0"
    export function releaseServo(parameter:any,block:any){
        let val1 = parameter.motorValue1_1.code;
        Generator.addCode(`mc.release_servo(${val1})`)
    }

    //% block="固定伺服电机[motorValue2_1]" blockType="command"
    //% motorValue2_1.shadow="number" motorValue2_1.defl="0"
    export function focusServo(parameter:any,block:any){
        let val1 = parameter.motorValue2_1.code;
        Generator.addCode(`mc.focus_servo(${val1})`)
    }

    //% block="伺服电机[motorValue3_1]是否开启" blockType="reporter"
    //% motorValue3_1.shadow="number" motorValue3_1.defl="0"
    export function isServoEnable(parameter:any,block:any){
        let val1 = parameter.motorValue3_1.code;
        Generator.addCode(`mc.is_servo_enable(${val1})`)
    }

    //% block="是否所有伺服电机已开启" blockType="reporter"
    export function isAllServoEnable(parameter:any,block:any){
        Generator.addCode(`mc.is_all_servo_enable()`)
    }

    //% block="---"
    export function noteSep7(){}

    //% block="重新初始化夹爪" blockType="command"
    export function setGripperIni(parameter:any,block:any){
        Generator.addCode(`mc.set_gripper_ini()`)
    }

    //% block="设置夹爪状态为[gripMode1_1]速度[gripValue1_1]" blockType="command"
    //% gripValue1_1.shadow="number" gripValue.defl="0"
    //% gripMode1_1.shadow="dropdown" gripMode1_1.options="gripMode1_1"
    export function setGripperState(parameter:any,block:any){
        let val1 = parameter.gripValue1_1.code,
        mode = parameter.gripMode1_1.code;
        Generator.addCode(`mc.set_gripper_state(${mode},${val1})`)
    }

    //% block="设置夹爪值为[gripValue2_1]速度[gripValue2_2]" blockType="command"
    //% gripValue2_1.shadow="number" gripValue2_1.defl="0"
    //% gripValue2_2.shadow="number" gripValue2_2.defl="0"
    export function setGripperValue(parameter:any,block:any){
        let val1 = parameter.gripValue2_1.code,
        val2 = parameter.gripValue2_2.code;
        Generator.addCode(`mc.set_gripper_value(${val1},${val2})`)
    }

    //% block="夹爪是否在运动" blockType="reporter"
    export function isGripperMoving(parameter:any,block:any){
        Generator.addCode(`mc.is_gripper_moving()`)
    }
}
