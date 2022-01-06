import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  public playerid : number = -1;
  public players  : any[] = [];

  constructor(private route: ActivatedRoute, private configService: ConfigService) { 

    this.route.params.subscribe(params => {
      if (params['id'] > -1)
        this.playerid = params['id'];
    });


    this.configService.getNames().subscribe(data => {
      
      for (let i = 0; i < data.length; i++) {
        let seged = {
          name: data[i],
          url : ""  
        };
        this.players.push( seged );
      }
    });
  }

  ngOnInit(): void {
  }

}
