import {Body, JsonController, Post} from "routing-controllers";
import * as admin from 'firebase-admin';

const firebaseConfig = {
    apiKey: "AIzaSyB5Hgj6UHU0088CS4ED3ZTXTaWdyFp1ulY",
    authDomain: "inspectordemo-d0370.firebaseapp.com",
    databaseURL: "https://inspectordemo-d0370.firebaseio.com",
    projectId: "inspectordemo-d0370",
    storageBucket: "inspectordemo-d0370.appspot.com",
    messagingSenderId: "66814669010",
    appId: "1:66814669010:web:8961b0a1210f6c6dbfbd0b"
};

@JsonController('/file')
export class FileControllers {
    app

    constructor() {
        this.app = admin.initializeApp(firebaseConfig)
    }

    @Post('/download')
    getAll(@Body() body: any) {
        const {fileName} = body
        const bucket = admin.storage().bucket();
        return bucket.file(fileName)
            .download()
            .then(data => data[0])
    }
}
