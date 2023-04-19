import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company, Vacancy } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://localhost:8000'


  constructor(private client: HttpClient) { }

  getVacancies(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/vacancies/`
    )
  }

  getVacancy(vacancy_id: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/vacancies/${vacancy_id}/`
    )
  }


  getVacanciesOfCompany(company_id: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/companies/${company_id}/vacancies`
    )
  }




  createVacancy(vacancyName: string,company_name:Company): Observable<Vacancy> {
    return this.client.post<Vacancy>(
      `${this.BASE_URL}/api/vacancies/`,
      {name: vacancyName,company: company_name}
    )
  }

  deleteVacancy(vacancy_id: number): Observable<any> {
    return this.client.delete(
      `${this.BASE_URL}/api/vacancies/${vacancy_id}/`
    )
  }
  updateVacancy(vacancy_id:number,vacancy_name:string): Observable<any>{
    return this.client.put(
      `${this.BASE_URL}/api/companies/${vacancy_id}/`,
      {name:vacancy_name}
    )
  }

}
