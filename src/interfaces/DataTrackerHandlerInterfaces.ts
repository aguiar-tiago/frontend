import { User } from "@datadog/browser-rum-core/cjs/rawRumEvent.types";

export interface triggerCustomActionFunction {
    (name: string, data: object): void;
}

export interface getGlobalContextFunction {
    (): object;
}

export interface setGlobalContextFunction {
    (data: object): void;
}

export interface appendToGlobalContextFunction {
    (name: string, data: object): void;
}

export interface setUserFunction {
    (data: User): void;
}

export interface unsetUserFunction {
    (): void;
}
