import { TrexItem } from './Entity/TrexItem';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelExpenseServiceService {
  travelExpenseList: TravelExpense[] = [];

  constructor(private http: HttpClient) { }

  getTravelExpenseList(){
    return this.http.get<TravelExpense[]>('http://localhost:8080/travelexpense/index');
  }


  getTravelExpenseById(id:number) : Observable<TravelExpense>{
      return this.http.get<TravelExpense>("http://localhost:8080/travelexpense/index/" + id);
  }
  
  deleteTravelExpenseById(id:number):Observable<TravelExpense>{
    return this.http.delete<TravelExpense>("http://localhost:8080/travelexpense/index/" + id);
  }

createTravelExpense(travelExpense :TravelExpense): Observable<TravelExpense>{
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type':'application/json'})
   };
    return this.http.post<TravelExpense>("http://localhost:8080/travelexpense/saveExpense", travelExpense, httpOptions);
 }

 createTrexItem(trexItem: TrexItem): Observable<TrexItem> {
  const httpOptions = {
    headers : new HttpHeaders({'Content-Type':'application/json'})
 };
  return this.http.post<TrexItem>("http://localhost:8080/travelexpense/saveItem", trexItem, httpOptions);
}

}

