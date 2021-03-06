import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'mobileFacetContains' }) 
export class MobileFacetContainsPipe implements PipeTransform { 
	transform(value: any, facetName: any): any {			
		let objects = [];		
		if(value!=undefined){
		Object.keys(value).forEach( key => {
			// console.log(key);
			if(facetName == value[key].facetName) {					
				objects.push(value[key]);
			}								
		});	
	}	
		return objects;
	} 
}