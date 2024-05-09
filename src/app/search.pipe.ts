import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[],searchKey:string):any[] {
    const result :any = []

    if(!value||!searchKey){return value}

    value.forEach((i:any)=>{
      if(i.item.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(i)
      }

    })


    return result;
  }

}

