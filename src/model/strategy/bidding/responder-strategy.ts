/// <reference path="../../../_references.d.ts" />

class ResponderStrategy implements redouble.IBiddingStrategy {

	 constructor() {

	 }

	 public getBid(game: redouble.IGame): redouble.IBid {
			return {type: redouble.BidType.NoBid};
	 }

}

export = ResponderStrategy;
