import {Component, Decorator, Template, NgElement, Foreach} from 'angular2/angular2';

import {PlayerStore, PlayerActions} from "../../stores/player-store";
import {PlayerService} from "../../stores/player-store";
import {Seat} from "../../model/core/seat";

@Component({
  selector: 'settings-view',
  services: [PlayerService]
})
@Template({
  url: 'src/ui/settings/settings.html',
  directives: [Foreach]
})

export class SettingsView {
   constructor(playerService: PlayerService) {
      super();
      this.playerService = playerService;
      this.players = playerService.players;
      this.Seat = Seat;
      this.seats = Seat.all();
   }

   handleChangeName(seat, event) {
      this.playerService.updatePlayer(seat, {name: event.target.value});
   }

   handleChangeHuman(seat, event) {
      this.playerService.updatePlayer(seat, {ishuman: event.target.value});
   }
}