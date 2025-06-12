import basePage from "../../../basePage";
import {$} from "@wdio/globals";
import uimap from "../properties/uimap";

class HomePage extends basePage {

    public get homePage(){
        return $(uimap.homePageSelector);
    }

}

export const homePage = new HomePage();