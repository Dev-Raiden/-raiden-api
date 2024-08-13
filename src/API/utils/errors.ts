/* eslint-disable @typescript-eslint/no-explicit-any */
export class ErrorAPI extends Error {
    readonly date: Date;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor (message: any, options = {}) {
        super(message);
        this.name = 'ErrorAPI';
        this.date = new Date();
        this.message = message + [
            'If you though this is a bug from our API, Please report this immediately to our support server https://discord.gg/du5rZjJNrq hehe'
        ].join('\n');
    }

    static Errors(message: any, options = {}): ErrorAPI {
        return new ErrorAPI(message, options);
    }
}