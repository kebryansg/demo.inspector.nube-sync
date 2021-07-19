import {Get, JsonController} from "routing-controllers";

@JsonController('/')
export class HomeControllers {
    @Get('')
    getIndex() {
        return 'Working!!.'
    }
}
