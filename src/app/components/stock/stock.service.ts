import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Stock } from "./stock.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: "root",
})
export class StockService {
  baseUrl = environment.URL + "/stocks";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(stock: Stock): Observable<Stock> {
    return this.http.post<Stock>(this.baseUrl, stock).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(stock_id: string): Observable<Stock> {
    const url = `${this.baseUrl}/${stock_id}`;
    return this.http.get<Stock>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(stock: Stock): Observable<Stock> {
    const url = `${this.baseUrl}/${stock.stock_id}`;
    return this.http.put<Stock>(url, stock).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Stock> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Stock>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
