import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
	name: "low", // The name is what we will use to refer to the pipe when we implement it in TaskListComponent
	pure: false //false indicates stateful pipe

})

export class LowPipe implements PipeTransform {
	transform(input: Keg[], args) {
		var desiredDoneState = args[0];
		if(desiredDoneState === "low") {
			return input.filter((keg) => {
				return keg.volume < 10;
			});
		} else {
			return input;
		}
	}
}
