import { Logger } from "homebridge";

export class Config {
    public client_id: string = "";
    public secret: string = "";
    public region: string = "";
    public deviceId: string = "";
    public autoFetchRemotes: boolean = true;
    public devices: Device[] = [];
    constructor(client_id?: string, secret?: string, region?: string, deviceId?: string, autoFetchRemotes = true, devices?: object[]) {
        this.client_id = client_id || "";
        this.secret = secret || "";
        this.region = region || "";
        this.deviceId = deviceId || "";
        this.autoFetchRemotes = autoFetchRemotes;
        if (devices) {
            for (var i = 0; i < devices.length; i++) {
                this.devices.push(new Device(devices[i]));
            }
        }
    }
}

export class Device {
    public remoteId: string = "";
    constructor(dev) {
        this.remoteId = dev;
    }
}