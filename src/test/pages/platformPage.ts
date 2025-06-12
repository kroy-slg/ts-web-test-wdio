import basePage from "../../../basePage";
import {$} from "@wdio/globals";
import uimap from "../properties/uimap";

class PlatformPage extends basePage {

    public get platformPage(){
        return $(uimap.platformEndPointPageSelector);
    }
}

export const platformPage = new PlatformPage();