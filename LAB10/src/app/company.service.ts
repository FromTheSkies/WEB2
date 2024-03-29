import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { Company } from './models';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URL = 'http://localhost:8000'


  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(
      `${this.BASE_URL}/api/companies/`
    )
  }

  getCompany(company_id: number): Observable<Company[]> {
    return this.client.get<Company[]>(
      `${this.BASE_URL}/api/companies/${company_id}/`
    )
  }


  createCompany(companyName: String): Observable<Company> {

    return this.client.post<Company>(
      `${this.BASE_URL}/api/companies/`,
      {name: companyName}
    )
  }

  deleteCompany(company_id: number): Observable<any> {
    return this.client.delete(
      `${this.BASE_URL}/api/companies/${company_id}/`
    )
  }

  updateCompany(company_id:number,company_name:string): Observable<any>{
    return this.client.put(
      `${this.BASE_URL}/api/companies/${company_id}/`,
      {name: company_name}
    )
  }

  
}
