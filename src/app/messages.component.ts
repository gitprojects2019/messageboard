import {Component} from '@angular/core';
import {WebService} from './web.service';

@Component({
    selector: 'messages',
    template : `This is the message template 
                <div *ngFor="let message of messages">
                <mat-card style="margin:5px">
                        <mat-card-title>
                            {{message.owner}}
                        </mat-card-title>
                    <mat-card-content>
                    {{message.text}}
                    </mat-card-content>
                
                </mat-card>
                </div>`
})


export class MessagesComponent {
    messages: string;
 constructor(private webService : WebService){

 }
 async ngOnInit(){
    var response = await this.webService.getMessages();
    console.log(JSON.parse(JSON.stringify(response)));
    this.messages = JSON.parse(JSON.stringify(response));
 }
//  messages = [{'text' : 'dasda', 'owner' : 'auto'}]
}