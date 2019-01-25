/// <reference types="node" />
import { EventEmitter } from 'events';
import * as interfaces from './interfaces';
declare class Bot extends EventEmitter {
    client: any;
    private options;
    private username;
    private password;
    private chatQueue;
    private currentChatMode;
    private chatDelay;
    private messageLastSentTime;
    constructor(options: interfaces.Options);
    init(): void;
    connectCityBuild(destination: string): Promise<void>;
    sendChat(text: string, sendNext?: boolean): void;
    sendCommand(command: string, sendNext?: boolean): void;
    sendMsg(re: string, text: string, sendNext?: boolean): void;
    private installPlugins;
    private registerEvents;
    private getTimeSinceLastMessage;
    private processChatQueue;
    private send;
}
export declare function createBot(options: interfaces.Options): Bot;
export {};
