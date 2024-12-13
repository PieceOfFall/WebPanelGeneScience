import type { MqttOptions } from './types'
import MQTT from './mqttinit'

export const createMqtt = (options: MqttOptions) => new MQTT(options)
