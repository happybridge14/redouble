/// <reference path="../../_references.d.ts" />

import {Component, View, NgFor, NgIf} from 'angular2/angular2';

import {CardComponent} from '../components/card';
import {Seat} from '../../model/core/seat';
import {GameService} from "../../services/game-service";

import "./trick.css";
import trickTemplate from "./trick.html";

@Component({
   selector: 'trick-component',
   bind: {
      card: "card"
   }
})
@View({
   template: trickTemplate,
   directives: [CardComponent, NgFor, NgIf]
})
export class TrickComponent {
   constructor(gameService: GameService) {
      this.Seat = Seat;
      this.gameService = gameService;
   }
   
   private gameService: GameService;
   public Seat: typeof Seat;
}