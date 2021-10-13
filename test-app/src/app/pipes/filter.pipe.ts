import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todoCollection : Array<{label : string; status : string}>, filtered:string): Array<{label : string; status : string}> {

    let resultArray = [];

    for(let todo of todoCollection){
      if(todo.status === filtered){
        resultArray.push(todo)
      }
    }
    return resultArray


  }

}
