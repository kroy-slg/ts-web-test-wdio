import { browser } from '@wdio/globals';

export default class basePage {

    open(path?:string) {
        return browser.url(`${path}`);
    }


}
